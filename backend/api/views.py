from api.serializers import (CreateOrderSerializer, OrderSerializer,
                             ProductSerializer)
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, permissions, viewsets
from rest_framework.permissions import AllowAny
from shopapp.models import Order, Product


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['category',]
    ordering_fields = ('title', 'price')


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    permission_classes = (AllowAny,)

    def get_serializer_class(self):
        if self.request.method in permissions.SAFE_METHODS:
            return OrderSerializer
        return CreateOrderSerializer
