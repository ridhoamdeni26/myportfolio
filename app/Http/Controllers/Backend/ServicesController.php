<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Service\ServiceCreateRequest;
use App\Http\Requests\Service\ServiceUpdateRequest;
use App\Models\Services;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

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

        return ['message' => 'ok'];
    }

    public function create(ServiceCreateRequest $request)
    {
        $request->validated();

        $data = [
            'title' => $request->title,
            'description' => $request->description,
        ];

        if ($request->hasFile('image')) {
            $data['image'] = Storage::disk('public')->put('services', $request->file('image'));
        }

        $create = Services::create($data);

        if (!$create) {
            return redirect(route('services.admin'))->with([
                'message' => 'Cant create services something wrong',
                'type' => 'error'
            ]);
        }

        return redirect(route('services.admin'))->with([
            'message' => 'Successfully create services',
            'type' => 'success'
        ]);
    }

    public function update(ServiceUpdateRequest $request)
    {
        $request->validated();
        $service = Services::find($request->id);

        if (!$service) {
            return redirect(route('services.admin'))->with([
                'message' => 'Service not found',
                'type' => 'error'
            ]);
        }

        $data = [
            'title' => $request->title,
            'description' => $request->description,
        ];

        if ($request->hasFile('image')) {
            $data['image'] = Storage::disk('public')->put('services', $request->file('image'));
            Storage::disk('public')->delete($service->image);
        } else {
            $data['image'] = $service->image;
        }

        $updateService = $service->update($data);

        if (!$updateService) {
            return redirect(route('services.admin'))->with([
                'message' => 'error update Service something wrong',
                'type' => 'error'
            ]);
        }

        return redirect(route('services.admin'))->with([
            'message' => 'Successfully update Service',
            'type' => 'success'
        ]);
    }

    public function delete($id)
    {
        $service = Services::find($id);

        if (!$service) {
            return redirect(route('services.admin'))->with([
                'message' => 'Services not found',
                'type' => 'error'
            ]);
        }

        $service->delete();

        return redirect(route('services.admin'))->with([
            'message' => 'Successfully deleted service',
            'type' => 'success'
        ]);
    }

    public function deleteSelected(Request $request)
    {

        $ids = $request->input('ids');
        Services::destroy($ids);

        return redirect(route('services.admin'))->with([
            'message' => 'Successfully deleted selected service',
            'type' => 'success'
        ]);
    }
}
