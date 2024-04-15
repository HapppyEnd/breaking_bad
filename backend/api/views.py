from api.serializers import (CreateOrderSerializer, OrderSerializer,
                             ProductSerializer)
from rest_framework import permissions, viewsets
from rest_framework.permissions import AllowAny
from shopapp.models import Order, Product


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_fields = ['category',]


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    permission_classes = (AllowAny,)

    def get_serializer_class(self):
        if self.request.method in permissions.SAFE_METHODS:
            return OrderSerializer
        return CreateOrderSerializer
