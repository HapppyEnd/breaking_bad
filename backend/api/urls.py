from django.urls import include, path
from api.views import CategorieViewSet, OrderViewSet, ProductViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()

router.register('products', ProductViewSet)
router.register('order', OrderViewSet)
router.register('categories', CategorieViewSet)

urlpatterns = [
    path('', include(router.urls))
]
