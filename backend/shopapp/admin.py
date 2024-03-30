from django.contrib import admin
from shopapp.models import Advantage, Category, Order, Product, ProductsInOrder


@admin.register(Advantage)
class AdvantageAdmin(admin.ModelAdmin):
    list_display = ('title',)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('name', 'created')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price',)


@admin.register(ProductsInOrder)
class ProductsInOrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'count',)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title',)
