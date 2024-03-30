from rest_framework import generics

from api.serializers import ProductSerializer
from shopapp.models import Product


class ProductsList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
