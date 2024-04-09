# Generated by Django 4.2 on 2024-04-09 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopapp', '0004_merge_20240409_2348'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='product',
            options={'default_related_name': 'product', 'ordering': ('title',), 'verbose_name': 'Товар', 'verbose_name_plural': 'Товары'},
        ),
        migrations.AlterModelOptions(
            name='productsinorder',
            options={'default_related_name': 'in_order', 'ordering': ('product',), 'verbose_name': 'Заказанный товар', 'verbose_name_plural': 'Заказанные товары'},
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='products/', verbose_name='Изображение'),
        ),
        migrations.AlterField(
            model_name='product',
            name='title',
            field=models.CharField(max_length=50, verbose_name='Название'),
        ),
        migrations.AlterField(
            model_name='productsinorder',
            name='count',
            field=models.IntegerField(verbose_name='Количество'),
        ),
    ]