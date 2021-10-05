from django.http import HttpRequest
from django.contrib.auth import get_user_model
from django.test import TestCase, Client, RequestFactory
from django.urls import resolve
from snippets.models import Snippet
from snippets.views import top, snippet_new, snippet_edit, snippet_detail
# Create your tests here.

UserModel = get_user_model()

class TopPageRenderSnippetsTest(TestCase):
    # テスト用テストデータを定義（setup）
    def setUp(self):
        self.user = UserModel.objects.create(
            username = 'test_user',
            email = 'test@example.com',
            password = 'top_secret_pass0001',
        )

        self.snippet = Snippet.objects.create(
            title = 'title',
            code = "print('hello')",
            description = 'descroption',
            created_by = self.user
        )

    def test_should_return_snippet_title(self):
        request = RequestFactory().get('/')
        request.user = self.user
        response = top(request)
        self.assertContains(response, self.snippet.title)
    
    def test_should_return_username(self):
        request = RequestFactory().get('/')
        request.user = self.user
        responce = top(request)
        self.assertContains(responce, self.user.username)
