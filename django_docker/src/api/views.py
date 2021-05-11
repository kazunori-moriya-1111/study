from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .models import SampleModel
import json


# Create your views here.
# 検索機能
def test(request, id):
    data_query_set = SampleModel.objects.filter(id=id)
    data = list(data_query_set.values())[0]
    params = {
        'id': data["id"],
        'user_id': data["user_id"],
        'title': data["title"],
        'body': data["body"],
    }

    response = JsonResponse(params)
    return response


# 一覧表示
def index(request):
    response_data = []
    data = SampleModel.objects.all().values()
    for record in data:
        params = {}
        params['id'] = record["id"]
        params['user_id'] = record["user_id"]
        params['title'] = record["title"]
        params['body'] = record["body"]
        response_data.append(params)
    json_str = json.dumps(response_data, ensure_ascii=False, indent=2)
    return HttpResponse(json_str)


# 追加機能
def add(request):
    print(request.POST)
    post_data = int(request.POST['user_id'])
    post_data += 1
    params = {
        'result': post_data
    }

    response = JsonResponse(params)
    return response
