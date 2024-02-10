<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateAboutmeRequest;
use App\Models\Experiences;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutmeController extends Controller
{
    public function index()
    {
        $currentPage = 'aboutme-admin';
        $breadcrumb = [
            ['url' => route('aboutme.admin'), 'label' => 'Aboutme'],
            ['label' => 'Aboutme Admin'],
        ];

        $exp = Experiences::orderBy('id')
            ->get();

        return Inertia::render('Aboutme/Index', [
            'breadcrumb' => $breadcrumb,
            'currentPage' => $currentPage,
            'exp' => $exp,
        ]);
    }

    public function update(UpdateAboutmeRequest $request)
    {

        $request->validated();
        dd($request->id);
        $profile = Experiences::find($request->id);
    }
}
