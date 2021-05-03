from django.shortcuts import render
from django.http import JsonResponse
from .models import SampleModel


# Create your views here.

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
