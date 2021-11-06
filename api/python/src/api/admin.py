from django.contrib import admin
from .models import Task, NuxtUser, Post

# Register your models here.
# admin.site.register(ApiModel)
admin.site.register(Task)
admin.site.register(NuxtUser)
admin.site.register(Post)