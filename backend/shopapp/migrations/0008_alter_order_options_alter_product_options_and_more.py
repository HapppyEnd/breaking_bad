# Generated by Django 4.2 on 2024-05-11 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopapp', '0007_remove_product_sales_number'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order',
            options={'default_related_name': 'orders', 'ordering': ('-created',), 'verbose_name': 'Заказ', 'verbose_name_plural': 'Заказы'},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={'default_related_name': 'product', 'ordering': ('-id',), 'verbose_name': 'Товар', 'verbose_name_plural': 'Товары'},
        ),
        migrations.AlterField(
            model_name='order',
            name='phone_number',
            field=models.IntegerField(verbose_name='Номер телефона'),
        ),
    ]
