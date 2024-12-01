FROM python:3.9
ENV PYTHONIOENCODING utf-8
WORKDIR /opt/app
COPY requirements.txt /opt/app
RUN pip install --upgrade pip
RUN pip install --upgrade setuptools
RUN pip install -r requirements.txt
WORKDIR /src