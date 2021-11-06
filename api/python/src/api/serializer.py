from rest_framework import serializers
# from .models import ApiModel
from .models import Task, NuxtUser, Post
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

# class ApiModelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ApiModel
#         fields = ('id', 'title', 'body')
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class TaskSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)

    class Meta:
        model = Task
        fields = ['id', 'title', 'created_at', 'updated_at']

class NuxtUserSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)
    
    class Meta:
        model = NuxtUser
        fields = ['id', 'created_at', 'updated_at']

class PostSerializer(serializers.ModelSerializer):
    # read_only, write_onlyでGET時とpost時のパラメータを指定できる
    user = NuxtUserSerializer(many=False, read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(queryset=NuxtUser.objects.all(), write_only=True)
    class Meta:
        model = Post
        fields = ['id', 'title', 'body', 'create_at', 'user', 'user_id']
