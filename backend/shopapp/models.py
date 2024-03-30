from decimal import Decimal

from django.core.validators import MinValueValidator
from django.db import models


class Advantage(models.Model):
    title = models.CharField('Преимущество', max_length=100)

    class Meta:
        verbose_name = 'Преимущество'
        verbose_name_plural = 'Преимущества'

    def __str__(self) -> str:
        return f'{self.title[:10]}...'


class Product(models.Model):
    title = models.CharField('Название товара', max_length=50)
    description = models.TextField('Описание товара')
    price = models.DecimalField(
        'Цена', max_digits=10, decimal_places=2,
        validators=[MinValueValidator(limit_value=Decimal(0.10))])
    advantages = models.ManyToManyField(
        'Advantage', verbose_name="Преимущества")
    image = models.TextField('Фото')
    category = models.ForeignKey(
        'Category', verbose_name='Категория', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self) -> str:
        return f'Товар: {self.title}'


class Category(models.Model):
    title = models.CharField('Категория', max_length=50)
    description = models.TextField()

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self) -> str:
        return f'Категория: {self.title}'


class Order(models.Model):
    phone_number = models.SmallIntegerField('Номер телефона')
    name = models.CharField('Имя', max_length=50)
    products = models.ManyToManyField('ProductsInOrder', verbose_name='Товары')
    created = models.DateTimeField('Дата создания', auto_now_add=True)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    def __str__(self) -> str:
        return (f'Заказ номер: {self.pk}. Имя: {self.name}, '
                f'создан: {self.created}')


class ProductsInOrder(models.Model):
    product = models.ForeignKey(
        'Product', verbose_name='Товар', on_delete=models.CASCADE)
    count = models.IntegerField('Количество товаров')

    class Meta:
        verbose_name = 'Заказанный товар'
        verbose_name_plural = 'Заказанные товары'

    def __str__(self) -> str:
        return f'{self.product}, количество - {self.count}'
