from rest_framework import viewsets

from api.serializers import ProductSerializer
from shopapp.models import Product


class ProductsList(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
