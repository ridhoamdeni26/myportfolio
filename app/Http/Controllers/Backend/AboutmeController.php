<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Aboutme\CreateExperienceRequest;
use App\Http\Requests\UpdateAboutmeRequest;
use App\Models\Experiences;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class AboutmeController extends Controller
{
    public function index(Request $request)
    {
        $currentPage = 'aboutme-admin';
        $breadcrumb = [
            ['url' => route('aboutme.admin'), 'label' => 'Aboutme'],
            ['label' => 'Aboutme Admin'],
        ];

        $perPage = $request->has('perPage') ? $request->perPage : 10;
        $page = $request->has('page') ? $request->page : 1;

        $query = Experiences::latest();

        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('year', 'like', '%' . $searchTerm . '%')
                    ->orWhere('job', 'like', '%' . $searchTerm . '%')
                    ->orWhere('place', 'like', '%' . $searchTerm . '%');
            });
        }

        $exp = $query->paginate($perPage, ['*'], 'page', $page);

        return Inertia::render('Aboutme/Index', [
            'breadcrumb' => $breadcrumb,
            'currentPage' => $currentPage,
            'exp' => $exp,
            'perPage' => $perPage,
            'nowPage' => $page,
        ]);
    }

    public function create(CreateExperienceRequest $request)
    {
        $request->validated();

        $data = [
            'year' => $request->year,
            'job' => $request->job,
            'place' => $request->place,
            'description_short' => $request->description_short,
            'description_long' => $request->description_long,
        ];

        if ($request->hasFile('image')) {
            $data['image'] = Storage::disk('public')->put('experience', $request->file('image'));
        }

        Experiences::create($data);

        return redirect(route('aboutme.admin'))->with([
            'message' => 'Successfully update experience',
            'type' => 'success'
        ]);
    }

    public function update(UpdateAboutmeRequest $request)
    {
        $request->validated();
        $experience = Experiences::find($request->id);

        if (!$experience) {
            return redirect(route('aboutme.admin'))->with([
                'message' => 'Experience not found',
                'type' => 'error'
            ]);
        }

        $data = [
            'year' => $request->year,
            'job' => $request->job,
            'place' => $request->place,
            'description_short' => $request->description_short,
            'description_long' => $request->description_long,
        ];

        if ($request->hasFile('image')) {
            $data['image'] = Storage::disk('public')->put('experience', $request->file('image'));
            Storage::disk('public')->delete($experience->image);
        } else {
            $data['image'] = $experience->image;
        }

        $experience->update($data);

        return redirect(route('aboutme.admin'))->with([
            'message' => 'Successfully create experience',
            'type' => 'success'
        ]);
    }

    public function delete($id)
    {
        $experience = Experiences::find($id);

        if (!$experience) {
            return redirect(route('aboutme.admin'))->with([
                'message' => 'Experience not found',
                'type' => 'error'
            ]);
        }

        $experience->delete();

        return redirect(route('aboutme.admin'))->with([
            'message' => 'Successfully deleted experience',
            'type' => 'success'
        ]);
    }

    public function deleteSelected(Request $request)
    {

        $ids = $request->input('ids');
        Experiences::destroy($ids);

        return redirect(route('aboutme.admin'))->with([
            'message' => 'Successfully deleted selected experiences',
            'type' => 'success'
        ]);
    }
}
