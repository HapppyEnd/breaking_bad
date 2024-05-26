from django.urls import include, path

from api.views import CategoryViewSet, OrderViewSet, ProductViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('products', ProductViewSet)
router.register('order', OrderViewSet)
router.register('category', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls))
]
