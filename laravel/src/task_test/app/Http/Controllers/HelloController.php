<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    // hello world page（メソッドを追加する）
    public function index()
    {
        // view（hello.blade.php）を呼び出す処理
        return view('hello');
    }
}
