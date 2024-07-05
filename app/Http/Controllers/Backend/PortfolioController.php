<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Portfolio\PortfolioCreateRequest;
use App\Http\Requests\Portfolio\PortfolioUpdateRequest;
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
            $data['image_description1'] = Storage::disk('public')->put('imagedescription', $request->file('image_description'));
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

    public function update(PortfolioUpdateRequest $request)
    {
        $request->validated();
        $portfolio = PortfolioProject::find($request->id);

        if (!$portfolio) {
            return redirect(route('portfolio.admin'))->with([
                'message' => 'Portfolio not found',
                'type' => 'error'
            ]);
        }

        $data = [
            'title' => $request->title,
            'client_name' => $request->client_name,
            'category' => $request->category,
            'date' => $request->date,
            'description' => $request->description
        ];

        if ($request->hasFile('image_thumbnail')) {
            $data['image_thumbnail'] = Storage::disk('public')->put('imagethumbnail', $request->file('image_thumbnail'));
            Storage::disk('public')->delete($portfolio->image_thumbnail);
        } else {
            $data['image_thumbnail'] = $portfolio->image_thumbnail;
        }

        if ($request->hasFile('image_description1')) {
            $data['image_description1'] = Storage::disk('public')->put('imagedescription', $request->file('image_description1'));
            Storage::disk('public')->delete($portfolio->image_description1);
        } else {
            $data['image_description1'] = $portfolio->image_description1;
        }

        if ($request->hasFile('image_description2')) {
            $data['image_description2'] = Storage::disk('public')->put('imagedescription2', $request->file('image_description2'));
            Storage::disk('public')->delete($portfolio->image_description2);
        } else {
            $data['image_description2'] = $portfolio->image_description2;
        }

        if ($request->hasFile('image_description3')) {
            $data['image_description3'] = Storage::disk('public')->put('imagedescription3', $request->file('image_description3'));
            Storage::disk('public')->delete($portfolio->image_description3);
        } else {
            $data['image_description3'] = $portfolio->image_description3;
        }

        $updatePortfolio = $portfolio->update($data);

        if (!$updatePortfolio) {
            return redirect(route('portfolio.admin'))->with([
                'message' => 'error update Portfolio something wrong',
                'type' => 'error'
            ]);
        }

        return redirect(route('portfolio.admin'))->with([
            'message' => 'Successfully update Portfolio',
            'type' => 'success'
        ]);
    }

    public function delete($id)
    {
        $portfolio = PortfolioProject::find($id);

        if (!$portfolio) {
            return redirect(route('portfolio.admin'))->with([
                'message' => 'Portfolio not found',
                'type' => 'error'
            ]);
        }

        $portfolio->delete();

        return redirect(route('portfolio.admin'))->with([
            'message' => 'Successfully deleted portfolio',
            'type' => 'success'
        ]);
    }

    public function deleteSelected(Request $request)
    {

        $ids = $request->input('ids');
        PortfolioProject::destroy($ids);

        return redirect(route('portfolio.admin'))->with([
            'message' => 'Successfully deleted selected portfolio',
            'type' => 'success'
        ]);
    }
}
