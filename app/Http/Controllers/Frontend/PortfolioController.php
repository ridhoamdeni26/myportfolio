<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Contactme;
use App\Models\Experiences;
use App\Models\Myprofiles;
use App\Models\PortfolioProject;
use App\Models\Services;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

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

    public function contact()
    {
        $profiles = Myprofiles::orderBy('id')
            ->first();
        return Inertia::render('User/Contact', [
            'profiles' => $profiles,
        ]);
    }

    public function contactSend(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'fullname' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'message' => 'required|string|min:5',
            ]);

            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }

            $data = $request->all();

            Contactme::create($data);

            $profiles = Myprofiles::orderBy('id')
                ->first();

            return Inertia::render('User/Contact', [
                'profiles' => $profiles,
                'toast' => [
                    'type' => 'success',
                    'message' => 'send message successfully',
                ],
            ]);

            // $responseData = [
            //     'success' => true,
            //     'message' => 'Contact saved successfully!',
            //     'profiles' => $profiles,
            // ];

            // return Inertia::render('User/Contact', $responseData);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'Error storing contact data']);
        }
    }
}
