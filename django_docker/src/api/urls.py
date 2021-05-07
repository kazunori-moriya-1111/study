from django.urls import path
from django.contrib import admin
from .views import test, add

urlpatterns = [
    path('v1/<int:id>/', test, name='test'),
    path('v1/add', add, name='add')
]
