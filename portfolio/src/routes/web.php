<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ChartjsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home');
});


Route::get('/chartjs', [ChartjsController::class, 'index']);


Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/contents/jobcareer', function () {
    return view('contents.jobcareer');
});

Route::get('/contents/resume', function () {
    return view('contents.resume');
});

Route::get('/contents/boatrace', function () {
    return view('contents.boatrace');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
