from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from api.serializers import OrderSerializer, ProductSerializer
from shopapp.models import Order, Product


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (AllowAny,)
