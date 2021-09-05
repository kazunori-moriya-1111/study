from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, mixins
from .models import ApiModel
from .serializer import ApiModelSerializer
import json

# mixinsでPUT,DELETEメソッドを追加
class ApiModelViewSet(viewsets.ModelViewSet, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    # GET POST PUTメソッドはDRFの標準機能で充足
    queryset = ApiModel.objects.all()
    serializer_class = ApiModelSerializer
    # delete methodのオーバーライド
    def destroy(self, request, pk):
        # レスポンス用削除データ情報取得
        data_query_set = ApiModel.objects.filter(id=pk)
        # 文字化け対策
        json_str = json.dumps(list(data_query_set.values())[0], ensure_ascii=False, indent=2)
        ApiModel.objects.filter(id=pk).delete()
        return HttpResponse(json_str)