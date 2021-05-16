from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .models import SampleModel, User
import json
import decimal


# Create your views here.
# 詳細機能
def detail(request, param_id):
    data_query_set = SampleModel.objects.filter(id=param_id)
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
        params = {'id': record["id"], 'user_id': record["user_id"], 'title': record["title"], 'body': record["body"]}
        response_data.append(params)
    json_str = json.dumps(response_data, ensure_ascii=False, indent=2)
    return HttpResponse(json_str)


# 追加機能
def add(request):
    # try-catchしてだめならエラーjsonを返却する
    print(request.POST)
    user_id = int(request.POST['user_id'])
    title = request.POST['title']
    body = request.POST['body']
    s = SampleModel(user_id=user_id, title=title, body=body)
    s.save()
    params = {
        'result': 'ok'
    }
    response = JsonResponse(params)
    return response


# 　削除機能
def delete(request):
    user_id_list = request.POST['user_id_list'].split(',')
    for delete_user_id in user_id_list:
        SampleModel.objects.filter(user_id=delete_user_id).delete()
    params = {
        'result': 'ok'
    }
    response = JsonResponse(params)
    return response


# ユーザ登録
def entry(request):
    user_id = request.POST['user_id']
    password = request.POST['password']
    s = User(user_id=user_id, password=password)
    s.save()
    params = {
        'result': 'ok'
    }
    response = JsonResponse(params)
    return response


# ユーザ認証
def login(request):
    post_password = request.POST['password']
    db_password = User.objects.filter(user_id=request.POST['user_id']).values()[0]['password']
    print(post_password, ': post_password')
    print(db_password, ': db_password')
    # レスポンス用配列定義
    params = {}
    # パスワード一致確認
    if post_password == db_password:
        params['result'] = 'ok'
    else:
        params['result'] = 'ng'
    response = JsonResponse(params)
    return response


# 目標設定
def set_goal(request):
    user_id = request.POST['user_id']
    goal_weight = float(request.POST['goal_weight'])
    day_calorie = int(request.POST['day_calorie'])
    print("type(goal_weight):", type(goal_weight))
    print("type(day_calorie):", type(day_calorie))
    # 更新処理
    User.objects.filter(user_id=user_id).update(goal_weight=goal_weight)
    User.objects.filter(user_id=user_id).update(day_calorie=day_calorie)
    params = {'result': 'ok'}
    response = JsonResponse(params)
    return response
