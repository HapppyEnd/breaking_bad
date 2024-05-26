from random import randint
from typing import Any

from django.core.management.base import BaseCommand, CommandParser
from shopapp.models import Advantage, Category, Product


class Command(BaseCommand):

    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument('count', type=int)

    def handle(self, *args: Any, **kwargs: Any) -> str | None:
        count = kwargs.get('count')
        for i in range(1, 5):
            category = Category(title=f'category{i}', description=f'desc{i}')
            category.save()
        for k in range(1, 5):
            advantage = Advantage(title=f'advantage{k}')
            advantage.save()
        for j in range(1, count+1):
            product = Product(title=f'product{j}', description=f'desc{j}',
                              price=randint(1, 1000), category=category,
                              )
            product.save()

            print(product.title, product.category)
