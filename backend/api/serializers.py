from rest_framework import serializers

from shopapp.models import Order, Product, ProductsInOrder


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'title', 'description', 'price',
                  'advantages', 'image', 'category')


class OrderProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    count = serializers.IntegerField()

    class Meta:
        model = ProductsInOrder
        fields = ('id', 'count')


class ShowProductSerializer(serializers.ModelSerializer):
    title = serializers.ReadOnlyField(source='product.title')

    class Meta:
        model = ProductsInOrder
        fields = ('title', 'count', )


class OrderSerializer(serializers.ModelSerializer):
    products = ShowProductSerializer(
        many=True, read_only=True, source='in_order')

    class Meta:
        model = Order
        fields = ('name', 'phone_number', 'products')


class CreateOrderSerializer(serializers.ModelSerializer):
    products = OrderProductSerializer(many=True)

    class Meta:
        model = Order
        fields = ('name', 'phone_number', 'products')

    @staticmethod
    def create_products(order, products):
        ProductsInOrder.objects.bulk_create(
            ProductsInOrder(
                count=product['count'],
                order=order,
                product=Product.objects.get(pk=product['id'])
            )for product in products
        )

    def create(self, validated_data):
        products = validated_data.pop('products')
        order = Order.objects.create(**validated_data)
        self.create_products(order, products)
        return order

    def to_representation(self, instance):
        return OrderSerializer(
            instance,
            context={'request': self.context.get('request')}).data
