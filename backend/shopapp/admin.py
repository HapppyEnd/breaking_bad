from django.contrib import admin
from shopapp.models import (Advantage, Category, Order, Product,
                            ProductAdvantage, ProductsInOrder)


@admin.register(Advantage)
class AdvantageAdmin(admin.ModelAdmin):
    list_display = ('title',)


class ProductInLine(admin.TabularInline):
    model = ProductAdvantage
    min_num = 1
    extra = 1


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('name', 'created')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price',)
    inlines = [ProductInLine,]


@admin.register(ProductsInOrder)
class ProductsInOrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'count',)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title',)
