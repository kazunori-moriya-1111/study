from django.urls import path
from django.contrib import admin
from .views import ApiModelViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('v1/event', ApiModelViewSet)