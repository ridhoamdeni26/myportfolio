<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    function index(Request $request)
    {
        $currentPage = 'dashboard';

        $breadcrumb = [
            ['url' => route('dashboard'), 'label' => 'Dashboard'],
            ['label' => 'Dashboard'],
        ];

        $totalVisitor = Visitor::count();

        $mostVisitedPage = Visitor::select('visited_page', DB::raw('COUNT(*) as visit_count'))
            ->groupBy('visited_page')
            ->orderByDesc('visit_count')
            ->first();

        $latestVisitorWithCity = Visitor::whereNotNull('city')
            ->orderByDesc('visit_time')
            ->first();

        $visitors = Visitor::orderBy('visit_time', 'desc')->paginate(10);

        return Inertia::render('Dashboard/Index', [
            'breadcrumb' => $breadcrumb,
            'totalVisitor' => $totalVisitor,
            'mostVisitedPage' => $mostVisitedPage,
            'latestVisitorWithCity' => $latestVisitorWithCity,
            'visitors' => $visitors,
            'currentPage' => $currentPage,
        ]);
    }
}
