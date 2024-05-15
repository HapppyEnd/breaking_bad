# Разработка веб-сервиса и API для интернет-магазина на основе фреймворка Django.

## Описание проекта

В проекте интернет-магазина основной упор был сделан на использование API Django Rest Framework. В данном онлайн магазине покупки товаров могут быть оформлены всего в один клик, без необходимости регистрации или авторизации.


использование Django Rest Framework в проекте интернет-магазина с однокликным оформлением заказа без регистрации или авторизации является эффективным решением, позволяющим сократить время на покупку и увеличить удобство для пользователей. Данный подход позволяет сохранить простоту и быстроту процесса совершения покупок, что является ключевым фактором успешности онлайн-торговли.


## Используемые технологии
1. Backend
- Django 4.2
- Django REST Framework

2. Frontend
- Node.js
- Next.js
- React Bootstrap
- Redux
3. БД
- PostgreSQL
4. Docker
5. Docker Compose

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
## Запуск проекта с помощью docker compose
1. клонировать репозиторий
```bash
git clone https://github.com/HapppyEnd/breaking_bad
```
2. Создать файл .env
```bash
touch .env
```
    Записать в файл переменные окружения:

    POSTGRES_DB=<имя БД>

    POSTGRES_USER=<имя пользователя>

    POSTGRES_PASSWORD=<пароль>

    DB_HOST=db

    DB_PORT=5432

    SECRET_KEY=<секретный ключ Django>


3. Перейти в папку breaking_bad
```bash
cd breaking_bad
```
4. Запустить docker compose

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