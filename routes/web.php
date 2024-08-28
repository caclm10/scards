<?php

use App\Http\Controllers\Account\PasswordController;
use App\Http\Controllers\Account\ProfileController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\CardImageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::prefix('account')->name('account.')->group(function () {
        Route::get('', AccountController::class)->name('index');
        Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::patch('password', [PasswordController::class, 'update'])->name('password.update');
    });

    Route::resource('cards', CardController::class)
        ->only(['index', 'store', 'update', 'destroy']);

    Route::resource('cards.images', CardImageController::class)
        ->only(['index', 'store']);
});

require __DIR__ . '/auth.php';
