<?php

use Illuminate\Support\Facades\Route;
/* HelloController クラスの名前空間のインポート文を追加する */
use App\Http\Controllers\HelloController;
use App\Http\Controllers\TestController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
/* hello world page（ルーティングを追加する） */
Route::get('/hello', [HelloController::class, "index"]);

Route::get('/tests/test', [TestController::class, "index"]);
