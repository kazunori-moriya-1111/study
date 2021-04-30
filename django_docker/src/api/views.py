from django.shortcuts import render
from django.http import HttpResponse
import json


# Create your views here.

def test(request):
    params = {
        'a': 1,
        'b': 2,
    }

    json_str = json.dumps(params, ensure_ascii=False, indent=2)
    return HttpResponse(json_str)
