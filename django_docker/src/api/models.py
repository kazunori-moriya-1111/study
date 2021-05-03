from django.db import models


# Create your models here.
class SampleModel(models.Model):
    user_id = models.IntegerField()
    title = models.CharField(max_length=200)
    body = models.CharField(max_length=200)

    def __str__(self):
        return self.user_id
