<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Services;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicesController extends Controller
{
    public function index(Request $request)
    {
        $currentPage = 'services-admin';
        $breadcrumb = [
            ['url' => route('services.admin'), 'label' => 'Services'],
            ['label' => 'Services Admin'],
        ];

        $perPage = $request->has('perPage') ? $request->perPage : 10;
        $page = $request->has('page') ? $request->page : 1;

        $query = Services::latest();

        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('title', 'like', '%' . $searchTerm . '%');
            });
        }

        $service = $query->paginate($perPage, ['*'], 'page', $page);

        return Inertia::render('Services/Index', [
            'breadcrumb' => $breadcrumb,
            'currentPage' => $currentPage,
            'service' => $service,
            'perPage' => $perPage,
            'nowPage' => $page,
        ]);
    }
}
