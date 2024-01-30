<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomepageController extends Controller
{
    public function index(Request $request)
    {
        $currentPage = 'homepage-admin';
        $breadcrumb = [
            ['url' => route('homepage.admin'), 'label' => 'Homepage'],
            ['label' => 'Homepage Admin'],
        ];

        return Inertia::render('Homepage/Index', [
            'breadcrumb' => $breadcrumb,
            'currentPage' => $currentPage
        ]);
    }
}
