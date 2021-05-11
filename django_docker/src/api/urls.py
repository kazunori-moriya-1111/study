from django.urls import path
from django.contrib import admin
from .views import test, add, index, delete

urlpatterns = [
    path('v1/<int:id>/', test, name='test'),
    path('v1/add', add, name='add'),
    path('v1/index', index, name='index'),
    path('v1/delete', delete, name='delete'),
]
