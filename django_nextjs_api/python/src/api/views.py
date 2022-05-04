from rest_framework.permissions import AllowAny
from rest_framework import generics
from rest_framework import viewsets
from .seializers import TaskSerializer, UserSerializer, PostSerializer
from .models import Task, Post
# Create your views here.

class CreateUserView(generic.CreateAPIView):
  serializer_class = UserSerializer
  permission_classes = (AllowAny,)

class PosrListView(generic.ListAPIView):
  queryset = Post.object.all()
  serializer_class = PostsList
  permisson_classes = (AllowAny,)

class PostRetrieveView(generic.RetrieveAPIView):
  queryset = Post.object.all()
  serializer_class = PostSerializer
  permission_classes = (AllowAny,)

class TaskListView(generic.ListAPIView):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer
  permisson_classes = (AllowAny,)

class TaskRetrieveView(generic.RetrieveAPIView):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer
  permisson_classes = (AllowAny,)

class TaskViewSet(viewsets.ModelViewSet):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer