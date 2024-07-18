<?php

use App\Http\Controllers\Backend\AboutmeController;
use App\Http\Controllers\Backend\ContactmeController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\HomepageController;
use App\Http\Controllers\Backend\PortfolioController as BackendPortfolioController;
use App\Http\Controllers\Backend\ServicesController;
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
Route::get('/sidebar', [PortfolioController::class, 'sidebar'])->name('portfolio.sidebar');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth', 'verified')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Homepage
    Route::get('/homepage-admin', [HomepageController::class, 'index'])->name('homepage.admin');
    Route::post('/homepage-update-profile/{id}',  [HomepageController::class, 'updateProfile'])->name('homepage.update.profile');

    // Aboutme
    Route::get('/aboutme-admin', [AboutmeController::class, 'index'])->name('aboutme.admin');
    Route::post('/aboutme-create',  [AboutmeController::class, 'create'])->name('aboutme.create');
    Route::post('/aboutme-update/{id}',  [AboutmeController::class, 'update'])->name('aboutme.update');
    Route::delete('/aboutme-delete/{id}',  [AboutmeController::class, 'delete'])->name('aboutme.delete');
    Route::delete('/aboutme-delete-selected',  [AboutmeController::class, 'deleteSelected'])->name('aboutme.delete.selected');

    // Services
    Route::get('/services-admin', [ServicesController::class, 'index'])->name('services.admin');
    Route::post('/services-create',  [ServicesController::class, 'create'])->name('services.create');
    Route::post('/services-update/{id}',  [ServicesController::class, 'update'])->name('services.update');
    Route::delete('/services-delete/{id}',  [ServicesController::class, 'delete'])->name('services.delete');
    Route::delete('/services-delete-selected',  [ServicesController::class, 'deleteSelected'])->name('services.delete.selected');

    // Portfolio
    Route::get('/portfolio-admin', [BackendPortfolioController::class, 'index'])->name('portfolio.admin');
    Route::post('/portfolio-create',  [BackendPortfolioController::class, 'create'])->name('portfolio.create');
    Route::post('/portfolio-update/{id}',  [BackendPortfolioController::class, 'update'])->name('portfolio.update');
    Route::delete('/portfolio-delete/{id}',  [BackendPortfolioController::class, 'delete'])->name('portfolio.delete');
    Route::delete('/portfolio-delete-selected',  [BackendPortfolioController::class, 'deleteSelected'])->name('portfolio.delete.selected');

    // Contact Me
    Route::get('/contactme-admin', [ContactmeController::class, 'index'])->name('contactme.admin');
    Route::delete('/contactme-delete/{id}',  [ContactmeController::class, 'delete'])->name('contactme.delete');
    Route::delete('/contactme-delete-selected',  [ContactmeController::class, 'deleteSelected'])->name('contactme.delete.selected');
});

Route::get('/dashboard-test', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard.test');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
