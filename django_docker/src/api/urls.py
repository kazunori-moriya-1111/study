from django.urls import path
from django.contrib import admin
from .views import test

urlpatterns = [
    path('v1/', test, name='test')
]
