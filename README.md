# Run application

## Start new django project
docker-compose run web sh -c "django-admin.py startproject <*name of app*> ./be_app"

## build and run images
docker-compose up --build


## Add new application to django
docker-compose run web sh -c "django-admin.py startapp <*name of app*> ./be_app" 

## run makemigrations
docker exec -it docker-kube_web_1 python ./be_app/manage.py makemigrations

## adding super user 
docker exec -it docker-kube_web_1 python ./be_app/manage.py createsuperuser

## open container command line
docker exec -it <*container id*> /bin/sh
psql -U postgres
