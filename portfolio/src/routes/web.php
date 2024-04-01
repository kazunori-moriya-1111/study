<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ManegementController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\RecordTagController;
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

Route::prefix('manegement')
    ->controller(ManegementController::class)
    ->name('manegement.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/calendar', 'calendar')->name('calendar');
        Route::post('/totalling', 'totalling')->name('totalling');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/{id}', 'show')->name('show');
        Route::get('/{id}/edit', 'edit')->name('edit');
        Route::post('/{id}', 'update')->name('update');
        Route::post('/{id}/destroy', 'destroy')->name('destroy');
        Route::prefix('/sort')
            ->name('sort.')
            ->group(function () {
                Route::get('/date', 'index')->name('date');
                Route::get('/recovery_rate', 'index')->name('recovery_rate');
                Route::get('/bet', 'index')->name('bet');
                Route::get('/payout', 'index')->name('payout');
            });
    });

Route::prefix('tag')
    ->controller(TagController::class)
    ->name('tag.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/', 'store')->name('store');
        Route::post('/{id}', 'update')->name('update');
        Route::post('/{id}/destroy', 'destroy')->name('destroy');
    });

Route::post('record-tag/{id}', [RecordTagController::class, 'update'])->name('record-tag.update');

Route::get('/welcome', function () {
    return view('welcome');
});

Route::prefix('contents')
    ->name('contents.')
    ->group(function () {
        Route::get('/jobcareer', function () {
            return view('contents.jobcareer');
        })->name('jobcareer');
        Route::get('/resume', function () {
            return view('contents.resume');
        })->name('resume');
        Route::get('/boatrace', function () {
            return view('contents.boatrace');
        })->name('boatrace');
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
