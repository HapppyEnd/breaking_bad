from django import forms
from django.contrib import admin
from phonenumber_field.widgets import PhoneNumberPrefixWidget
from shopapp.models import (Advantage, Category, Order, Product,
                            ProductAdvantage, ProductsInOrder)


class ContactForm(forms.ModelForm):
    class Meta:
        widgets = {
            'phone_number': PhoneNumberPrefixWidget(initial='RU'),
        }


@admin.register(Advantage)
class AdvantageAdmin(admin.ModelAdmin):
    list_display = ('title',)


class ProductInLine(admin.TabularInline):
    model = ProductAdvantage
    min_num = 1
    extra = 1


class OrderInLine(admin.TabularInline):
    model = ProductsInOrder
    min_num = 1
    extra = 1


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    form = ContactForm
    list_display = ('name', 'created')
    ordering = ('-created',)
    search_fields = ('name',)
    inlines = [OrderInLine,]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'category')
    inlines = [ProductInLine,]
    list_filter = ('price', 'category',)
    ordering = ('title', 'price', 'category',)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title',)
