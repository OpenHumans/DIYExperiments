release: python manage.py migrate
web: gunicorn DIYExperiments.wsgi:application --log-file -
worker: celery worker -A main --concurrency 1
