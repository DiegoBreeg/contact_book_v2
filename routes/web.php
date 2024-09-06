<?php

use App\Http\Controllers\ContactBookController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))
        ->name('dashboard');

    Route::resource('contact', ContactController::class);
    Route::resource('contactBook', ContactBookController::class);
    Route::resource('user', UserController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/contactBook/create', [ContactBookController::class, 'store'])->name('contactBook.store');
});

require __DIR__.'/auth.php';
