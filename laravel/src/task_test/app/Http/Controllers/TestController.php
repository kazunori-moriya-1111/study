<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    public function index()
    {
        // エロクアント（クエリ分割、リレーション機能が使いやすい）
        $values = Test::all();
        // dd($values);

        // クエリビルダ（エロクアントと比較して速い）
        $queryBuilder = DB::table('tests')->where('text', '=', 'aaa')->select('id', 'text')->get();
        dd($queryBuilder);
        return view('tests.test', compact('values'));
    }
}
