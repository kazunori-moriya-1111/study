from django.urls import path
from django.contrib import admin
from .views import test

urlpatterns = [
    path('v1/<int:id>/', test, name='test')
]
