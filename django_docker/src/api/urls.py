from django.urls import path
from django.contrib import admin
from .views import detail, add, index, delete, entry, login, set_goal

urlpatterns = [
    path('v1/detail/<int:id>', detail, name='detail'),
    path('v1/add', add, name='add'),
    path('v1/index', index, name='index'),
    path('v1/delete', delete, name='delete'),
    path('v1/entry', entry, name='entry'),
    path('v1/login', login, name='login'),
    path('v1/set_goal', set_goal, name='set_goal'),
]
