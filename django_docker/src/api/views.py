from django.shortcuts import render
from django.http import JsonResponse
import json


# Create your views here.

def test(request):
    params = {
        'a': "aがkeyのvalue",
        'b': 4,
    }

    response = JsonResponse(params)
    return response
