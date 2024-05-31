from random import randint
from typing import Any

from django.core.management.base import BaseCommand, CommandParser
from shopapp.models import Advantage, Category, Product


class Command(BaseCommand):

    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument('count', type=int)

    def handle(self, *args: Any, **kwargs: Any) -> str | None:
        count = kwargs.get('count')

        self.stdout.write(self.style.WARNING('Создание категорий...'))
        if Category.objects.count() > 0:
            self.stdout.write(self.style.WARNING('Категории уже созданы.'))
        else:
            Category.objects.bulk_create(
                Category(title=f'cat{i}') for i in range(0, 5))
            self.stdout.write(self.style.SUCCESS('Категории созданы.'))

        id_category = [i.id for i in Category.objects.all()]

        self.stdout.write(self.style.WARNING('Создание преимуществ...'))
        for k in range(1, 5):
            advantage = Advantage(title=f'advantage{k}')
            advantage.save()
        for j in range(1, count+1):
            product = Product(
                title=f'product{j}',
                description=f'desc{j}',
                price=randint(1, 1000),
                category=Category.objects.get(
                    id=id_category[randint(0, len(id_category) - 1)],
            ))
            product.save()

            print(product.title, product.category)
