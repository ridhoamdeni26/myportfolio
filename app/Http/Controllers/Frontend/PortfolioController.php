<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Experiences;
use App\Models\Myprofiles;
use App\Models\PortfolioProject;
use App\Models\Services;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Index');
    }

    public function about()
    {
        $exp = Experiences::orderBy('id')
            ->get();

        $profiles = Myprofiles::orderBy('id')
            ->first();

        $statistics = [
            ['number' => 4, 'label' => 'Years of Experience', 'color' => '#D3F4EC'],
            ['number' => 10, 'label' => 'Projects Completed', 'color' => '#FCE8D4'],
            ['number' => 10, 'label' => 'Happy Clients', 'color' => '#E3F9E0'],
        ];

        return Inertia::render('User/About', [
            'experiences' => $exp,
            'profiles' => $profiles,
            'statistics' => $statistics
        ]);
    }

    public function services()
    {
        $services = Services::orderBy('id')
            ->get();
        return Inertia::render('User/Service', [
            'services' => $services
        ]);
    }

    public function portfolio()
    {
        $portfolio = PortfolioProject::orderBy('id')
            ->get();
        return Inertia::render('User/Portfolio', [
            'portfolio' => $portfolio
        ]);
    }
}
