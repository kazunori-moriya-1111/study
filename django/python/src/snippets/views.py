from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from snippets.models import Snippet
# Create your views here.
import logging
logging.basicConfig(filename='test.log', level=logging.DEBUG)

def top(request):
    snippets = Snippet.objects.all()
    context = {'snippets': snippets}
    logging.debug(context)
    return render(request, 'snippets/top.html', context)

def snippet_new(request):
    return HttpResponse('スニペットの登録')

def snippet_edit(request, snippet_id):
    return HttpResponse('スニペットの編集')

def snippet_detail(request, snippet_id):
    snippets = get_object_or_404(Snippet, pk=snippet_id)
    return render(request, 'snippets/snippet_detail.html', {'snippets': snippets})