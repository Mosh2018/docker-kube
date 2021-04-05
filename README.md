# Run application

## Start new django project
docker-compose run web sh -c "django-admin.py startproject <*name of app*> ./be_app"

## build and run images

docker-compose up --build


## Add new application to django

docker-compose run web sh -c "django-admin.py startapp <*name of app*>" 

## run makemigrations

docker-compose run web sh -c "python manage.py makemigrations"
