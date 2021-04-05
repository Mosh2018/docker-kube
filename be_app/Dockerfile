FROM python:3
MAINTAINER MOSH

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY ./be_app/requirements.txt /app/

RUN pip install -r ./be_app/requirements.txt

COPY . /app/
