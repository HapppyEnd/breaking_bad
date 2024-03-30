from django.db import models
from django.core.validators import MinValueValidator


class Advantage(models.Model):
    title = models.CharField('Преимущество', max_length=100)

    def __str__(self) -> str:
        return f'{self.title[:10]}...'


class Product(models.Model):
    title = models.CharField('Название товара', max_length=50)
    description = models.TextField('Описание товара')
    price = models.DecimalField(
        'Цена', max_digits=5, decimal_places=2,
        validators=[MinValueValidator(limit_value=0)])
    advantages = models.ManyToManyField(
        'Advantage', verbose_name="Преимущества")
    image = models.TextField('Фото')

    def __str__(self) -> str:
        return f'{self.title}'


class Order(models.Model):
    phone_number = models.SmallIntegerField('Номер телефона')
    name = models.CharField('Имя', max_length=50)
    products = models.ManyToManyField('ProductsInOrder', verbose_name='Товары')
    created = models.DateTimeField('Дата создания', auto_now_add=True)


class ProductsInOrder(models.Model):
    product = models.ForeignKey(
        'Product', verbose_name='Товар', on_delete=models.CASCADE)
    count = models.IntegerField('Количество товаров')
