from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


# Create your models here.
class SampleModel(models.Model):
    user_id = models.IntegerField()
    title = models.CharField(max_length=200)
    body = models.CharField(max_length=200)

    def __str__(self):
        return self.user_id


class User(models.Model):
    user_id = models.CharField(max_length=200, primary_key=True)
    password = models.CharField(max_length=200)
    goal_weight = models.IntegerField()
    day_calorie = models.IntegerField()


class Body(models.Model):
    # Userテーブルの主キーと1対他のリレーションを定義
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    weight = models.DecimalField(max_digits="3", decimal_places="1")

    # 複合ユニークキーを設定
    class Meta:
        # 1ユーザの1日の体重は1件
        constraints = [
            models.UniqueConstraint(fields=['user_id', 'date'], name='unique_date_weight'),
        ]


class Menu(models.Model):
    menu_id = models.UUIDField(primary_key=True)
    # Userテーブルの主キーと1対他のリレーションを定義
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    calorie = models.IntegerField()
    gram = models.IntegerField()

    # 複合ユニークキーを設定
    class Meta:
        # 1ユーザの1日の体重は1件
        constraints = [
            models.UniqueConstraint(fields=['user_id', 'name'], name='unique_user_menu'),
        ]


class Meal(models.Model):
    # Userテーブルの主キーと1対他のリレーションを定義
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    choices = ((1, '朝食'), (2, '昼食'), (3, '夜食'))
    bld = models.IntegerField(choices=choices)
    menu_id = models.ForeignKey(Menu, on_delete=models.CASCADE)
    count = models.IntegerField()
