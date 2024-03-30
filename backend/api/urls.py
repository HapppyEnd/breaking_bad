from django.urls import path
from api.views import ProductsList

urlpatterns = [
    path('products/', ProductsList.as_view({'get': 'list'}), name='products')
]
