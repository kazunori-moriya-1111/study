# from django.shortcuts import render
# from django.http import HttpResponse
# from rest_framework import viewsets, mixins
# from .models import ApiModel
# from .serializer import ApiModelSerializer
# import json
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, viewsets, status
from django.contrib.auth.models import User
from django.http import HttpResponse
from .models import Task, NuxtUser, Post
from .serializer import TaskSerializer, UserSerializer, NuxtUserSerializer, PostSerializer
from .ownpermissions import ProfilePermission

# mixinsでPUT,DELETEメソッドを追加
# class ApiModelViewSet(viewsets.ModelViewSet, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
#     # GET POST PUTメソッドはDRFの標準機能で充足
#     queryset = ApiModel.objects.all()
#     serializer_class = ApiModelSerializer
#     # delete methodのオーバーライド
#     def destroy(self, request, pk):
#         # レスポンス用削除データ情報取得
#         data_query_set = ApiModel.objects.filter(id=pk)
#         # 文字化け対策
#         json_str = json.dumps(list(data_query_set.values())[0], ensure_ascii=False, indent=2)
#         ApiModel.objects.filter(id=pk).delete()
#         return HttpResponse(json_str)
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (ProfilePermission,)


class ManageUserView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    authentication_classes = TokenAuthentication,
    permission_classes = (IsAuthenticated,)

class NuxtUserViewSet(viewsets.ModelViewSet):
    queryset = NuxtUser.objects.all()
    serializer_class = NuxtUserSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class NestedListView(generics.ListAPIView):
    serializer_class = PostSerializer
    def get_queryset(self):
        url_user_id = self.kwargs['user_id']
        queryset = Post.objects.all()
        nuxt_user = NuxtUser.objects.filter(id = url_user_id).first()
        queryset = queryset.filter(user_id = nuxt_user)
        return queryset
    