from django.contrib import admin
from .models import Task
# Register your models here.

# プロジェクト名にアンスコを使用しているため、mikemigrationsが動作しない可能性が高い
admin.site.register(Task)