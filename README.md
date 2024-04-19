# Разработка веб-сервиса и API для интернет магазина на основе фреймворка Django.

## Задача

Разработать сайт интернет-магазина. 


## Используемые технологии
1. Backend
- Django 4.2 и Django REST Framework

2. Frontend
- Node.js
- Next.js
- React Bootstrap
- Redux
3. БД
- PostgreSQL
4. Docker и Docker Compose

## Документация по проекту

1. Для запуска backend необходимо:
* Перейти в папку backend:
```bash
cd backend
```
* Установить зависимости:
```bash
pip install -r requirements.txt
```

* Команда для запуска приложения
```bash
python manage.py runserver
```
2. Для запуска frontend необходимо:
* Перейти в папку frontend:
```bash
cd frontend:
```
* Установить зависимости:
```bash
npm i
```
* Команда для запуска приложения
```bash
npm run dev
```
* Запуск проекта с помощью docker compose
1. клонировать репозиторий
```bash
git clone https://github.com/HapppyEnd/breaking_bad
```
2. Перейти в папку breaking_bad
```bash
cd breaking_bad
```
3. Запустить docker compose

```bash
docker compose up -d
```
```bash
docker compose -f docker-compose.yml exec backend python manage.py migrate
```
```bash
docker compose -f docker-compose.yml exec backend python manage.py collectstatic
```
```bash
docker compose -f docker-compose.yml exec backend cp -r /app/static/. /app/backend_static/static/
```