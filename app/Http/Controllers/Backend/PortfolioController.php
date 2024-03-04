<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Portfolio\PortfolioCreateRequest;
use App\Models\PortfolioProject;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    public function index(Request $request)
    {
        $currentPage = 'portfolio-admin';
        $breadcrumb = [
            ['url' => route('portfolio.admin'), 'label' => 'Portfolio'],
            ['label' => 'Portfolio Admin'],
        ];

        $perPage = $request->has('perPage') ? $request->perPage : 10;
        $page = $request->has('page') ? $request->page : 1;

        $query = PortfolioProject::latest();

        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('title', 'like', '%' . $searchTerm . '%')
                    ->orWhere('client_name', 'like', '%' . $searchTerm . '%');
            });
        }

        $portfolio = $query->paginate($perPage, ['*'], 'page', $page);

        return Inertia::render('Portfolio/Index', [
            'breadcrumb' => $breadcrumb,
            'currentPage' => $currentPage,
            'portfolio' => $portfolio,
            'perPage' => $perPage,
            'nowPage' => $page,
        ]);
    }

    public function create(PortfolioCreateRequest $request)
    {
        $request->validated();

        $data = [
            'title' => $request->title,
            'client_name' => $request->client_name,
            'category' => $request->category,
            'date' => $request->selectedDate,
            'description' => $request->description
        ];

        if ($request->hasFile('image_thumbnail')) {
            $data['image_thumbnail'] = Storage::disk('public')->put('imagethumbnail', $request->file('image_thumbnail'));
        }

        if ($request->hasFile('image_description')) {
            $data['image_description'] = Storage::disk('public')->put('imagedescription', $request->file('image_description'));
        }

        if ($request->hasFile('image_description2')) {
            $data['image_description2'] = Storage::disk('public')->put('imagedescription2', $request->file('image_description2'));
        }

        if ($request->hasFile('image_description3')) {
            $data['image_description3'] = Storage::disk('public')->put('imagedescription3', $request->file('image_description3'));
        }

        $create = PortfolioProject::create($data);

        if (!$create) {
            return redirect(route('portfolio.admin'))->with([
                'message' => 'Cant create portfolio something wrong',
                'type' => 'error'
            ]);
        }

        return redirect(route('portfolio.admin'))->with([
            'message' => 'Successfully create portfolio',
            'type' => 'success'
        ]);
    }
}
