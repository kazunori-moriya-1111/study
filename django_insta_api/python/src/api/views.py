from rest_framework import generics
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from . import serializers
from .models import Profile, Post, Comment

class CreateUserView(generics.CreateAPIView):
  serializer_class = serializers.UserSerializer
  permission_classes = (AllowAny,)

class ProfileViewSet(viewsets.ModelViewSet):
  queryset = Profile.objects.all()
  serializer_class = serializers.ProfileSerializer

  def perform_create(self, serializer):
    serializer.save(userProfile=self.request.user)

class MyProfileListView(generics.ListAPIView):
  queryset = Profile.objects.all()
  serializer_class = serializers.ProfileSerializer
  # ログインしているユーザのプロフィールにfilterする
  def get_queryset(self):
    return self.queryset.filter(userProfile=self.request.user)

class PostViewSet(viewsets.ModelViewSet):
  queryset = Post.objects.all()
  serializer_class = serializers.PostSerializer
  # 投稿を新規で作成するときはログインしているユーザを使用する
  def perform_create(self, serializer):
    serializer.save(userPost=self.request.user)

class CommentViewSer(viewsets.ModelViewSet):
  queryset = Comment.objects.all()
  serializer_class = serializers.CommentSerializer
  # コメントを新規で作成するときはログインしてるユーザを使用する
  def perform_create(self, serializer):
    serializer.save(usercontent=self.request.user)