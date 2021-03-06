from django.db import models

# Create your models here.
# class ApiModel(models.Model):
#     title = models.CharField(max_length=200, null=True)
#     body = models.CharField(max_length=200, null=True)

#     def __str__(self):
#         return self.title

class Task(models.Model):
    title = models.CharField(max_length=50)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class NuxtUser(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.id

class Post(models.Model):
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=250)
    create_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(NuxtUser, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title
