FROM python:3.9
ENV PYTHONUNBUFFERED 1
RUN mkdir /src
WORKDIR /src
ADD requirements.txt /src/
RUN pip install -r requirements.txt
ADD ./src/ /src/
# django-admin startproject xxx .
# python manage.py startapp xxx
# python manage.py collectstatic