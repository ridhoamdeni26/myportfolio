<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Homepage\Update;
use App\Http\Requests\UpdateProfileRequest;
use App\Models\Profile;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Http\Exceptions\ValidationException;
use Illuminate\Support\Facades\Redirect;

class HomepageController extends Controller
{
    public function index(Request $request)
    {
        $currentPage = 'homepage-admin';
        $breadcrumb = [
            ['url' => route('homepage.admin'), 'label' => 'Homepage'],
            ['label' => 'Homepage Admin'],
        ];

        $profiles = Profile::first();

        return Inertia::render('Homepage/index', [
            'breadcrumb' => $breadcrumb,
            'currentPage' => $currentPage,
            'profiles' => $profiles
        ]);
    }

    public function updateProfile(UpdateProfileRequest $request,  Profile $profile)
    {
        $request->validated();
        $profile = Profile::find($request->id);

        $data = [
            'name' => $request->name,
            'country' => $request->country,
            'phone' => $request->phone,
            'email' => $request->email,
            'age' => $request->age,
            'city' => $request->city,
            'address' => $request->address,
            'typed' => $request->typed,
        ];

        if ($request->hasFile('image_icon')) {
            $data['image_icon'] = Storage::disk('public')->put('imageicon', $request->file('image_icon'));
            Storage::disk('public')->delete($profile->image_icon);
        } else {
            $data['image_icon'] = $profile->image_icon;
        }

        if ($request->hasFile('image_homepage')) {
            $data['image_homepage'] = Storage::disk('public')->put('imagehomepage', $request->file('image_homepage'));
            Storage::disk('public')->delete($profile->image_homepage);
        } else {
            $data['image_homepage'] = $profile->image_homepage;
        }

        $profile->update($data);

        return redirect(route('homepage.admin'))->with([
            'message' => 'Successfully update homepage data',
            'type' => 'success'
        ]);
    }
}
