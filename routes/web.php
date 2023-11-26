<?php

use App\Http\Controllers\Frontend\PortfolioController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.index');
Route::get('/about-me', [PortfolioController::class, 'about'])->name('portfolio.about');
Route::get('/services', [PortfolioController::class, 'services'])->name('portfolio.services');
Route::get('/portfolio', [PortfolioController::class, 'portfolio'])->name('portfolio.home');
Route::get('/contact-me', [PortfolioController::class, 'contact'])->name('portfolio.contact');
Route::post('/contact-me', [PortfolioController::class, 'contactSend'])->name('portfolio.contact.post');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
