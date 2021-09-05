from rest_framework import serializers
from .models import ApiModel

class ApiModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApiModel
        fields = ('id', 'title', 'body')