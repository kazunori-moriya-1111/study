# from django.urls import path
# from django.contrib import admin
# from .views import ApiModelViewSet
# from rest_framework import routers

# router = routers.DefaultRouter()
# router.register('v1/event', ApiModelViewSet)

from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from api.views import TaskViewSet, UserViewSet, ManageUserView, NuxtViewSet

router = routers.DefaultRouter()
router.register('tasks', TaskViewSet)
router.register('users', UserViewSet)
router.register('nuxt', NuxtViewSet)

urlpatterns = [
    path('myself/', ManageUserView.as_view(), name='myself'),
    # path('nuxt/', NuxtViewSet.as_view(), name="nuxt"),
    path('', include(router.urls)),
]