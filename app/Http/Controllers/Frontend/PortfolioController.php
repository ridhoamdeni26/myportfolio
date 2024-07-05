<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Contactme;
use App\Models\Experiences;
use App\Models\Myprofiles;
use App\Models\PortfolioProject;
use App\Models\Profile;
use App\Models\Services;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Jenssegers\Agent\Agent;
use Stevebauman\Location\Facades\Location;

class PortfolioController extends Controller
{
    public function index(Request $request)
    {
        $agent = new Agent();
        $location = Location::get();

        $profiles = Profile::first();

        $typedString = $profiles['typed'];
        $typedArray = json_decode($typedString);

        for ($i = 1; $i < count($typedArray); $i += 2) {
            $typedArray[$i] = (int)$typedArray[$i];
        }

        Visitor::create([
            'ip_address' => $request->getClientIp(),
            'operating_system' => $agent->platform(),
            'visit_time' => now(),
            'user_agent' => request()->header('User-Agent'),
            'browser' => $agent->browser(),
            'browser_version' => $agent->version($agent->browser()),
            'device' => $agent->device(),
            'platform' => $agent->platform(),
            'referer' => $request->headers->get('referer', 'Direct Visit'),
            'visited_page' => $request->fullUrl(),
            'city' => $location->cityName,
            'region' => $location->regionName,
            'country' => $location->countryName,
            'zipcode' => $location->zipCode,
            'timezone' => $location->timezone,
        ]);

        return Inertia::render('User/Index', [
            'profiles' => $profiles,
            'typed' => $typedArray,
        ]);
    }

    public function about(Request $request)
    {
        $agent = new Agent();
        $location = Location::get();

        $exp = Experiences::orderBy('id')
            ->get();

        $profiles = Profile::first();

        $typedString = $profiles['typed'];
        $typedArray = json_decode($typedString);

        for ($i = 1; $i < count($typedArray); $i += 2) {
            $typedArray[$i] = (int)$typedArray[$i];
        }

        $statistics = [
            ['number' => 4, 'label' => 'Years of Experience', 'color' => '#D3F4EC'],
            ['number' => 10, 'label' => 'Projects Completed', 'color' => '#FCE8D4'],
            ['number' => 10, 'label' => 'Happy Clients', 'color' => '#E3F9E0'],
        ];

        Visitor::create([
            'ip_address' => $request->getClientIp(),
            'operating_system' => $agent->platform(),
            'visit_time' => now(),
            'user_agent' => request()->header('User-Agent'),
            'browser' => $agent->browser(),
            'browser_version' => $agent->version($agent->browser()),
            'device' => $agent->device(),
            'platform' => $agent->platform(),
            'referer' => $request->headers->get('referer', 'Direct Visit'),
            'visited_page' => $request->fullUrl(),
            'city' => $location->cityName,
            'region' => $location->regionName,
            'country' => $location->countryName,
            'zipcode' => $location->zipCode,
            'timezone' => $location->timezone,
        ]);

        return Inertia::render('User/About', [
            'experiences' => $exp,
            'profiles' => $profiles,
            'statistics' => $statistics,
            'typed' => $typedArray
        ]);
    }

    public function services(Request $request)
    {
        $agent = new Agent();
        $location = Location::get();

        $services = Services::orderBy('id')
            ->get();

        $profiles = Profile::first();
        $email = $profiles['email'];

        Visitor::create([
            'ip_address' => $request->getClientIp(),
            'operating_system' => $agent->platform(),
            'visit_time' => now(),
            'user_agent' => request()->header('User-Agent'),
            'browser' => $agent->browser(),
            'browser_version' => $agent->version($agent->browser()),
            'device' => $agent->device(),
            'platform' => $agent->platform(),
            'referer' => $request->headers->get('referer', 'Direct Visit'),
            'visited_page' => $request->fullUrl(),
            'city' => $location->cityName,
            'region' => $location->regionName,
            'country' => $location->countryName,
            'zipcode' => $location->zipCode,
            'timezone' => $location->timezone,
        ]);

        return Inertia::render('User/Service', [
            'services' => $services,
            'email' => $email
        ]);
    }

    public function portfolio(Request $request)
    {
        $agent = new Agent();
        $location = Location::get();

        $portfolio = PortfolioProject::orderBy('id')
            ->get();

        Visitor::create([
            'ip_address' => $request->getClientIp(),
            'operating_system' => $agent->platform(),
            'visit_time' => now(),
            'user_agent' => request()->header('User-Agent'),
            'browser' => $agent->browser(),
            'browser_version' => $agent->version($agent->browser()),
            'device' => $agent->device(),
            'platform' => $agent->platform(),
            'referer' => $request->headers->get('referer', 'Direct Visit'),
            'visited_page' => $request->fullUrl(),
            'city' => $location->cityName,
            'region' => $location->regionName,
            'country' => $location->countryName,
            'zipcode' => $location->zipCode,
            'timezone' => $location->timezone,
        ]);

        return Inertia::render('User/Portfolio', [
            'portfolio' => $portfolio
        ]);
    }

    public function contact(Request $request)
    {
        $agent = new Agent();
        $location = Location::get();

        $profiles = Myprofiles::orderBy('id')
            ->first();
        return Inertia::render('User/Contact', [
            'profiles' => $profiles,
        ]);

        Visitor::create([
            'ip_address' => $request->getClientIp(),
            'operating_system' => $agent->platform(),
            'visit_time' => now(),
            'user_agent' => request()->header('User-Agent'),
            'browser' => $agent->browser(),
            'browser_version' => $agent->version($agent->browser()),
            'device' => $agent->device(),
            'platform' => $agent->platform(),
            'referer' => $request->headers->get('referer', 'Direct Visit'),
            'visited_page' => $request->fullUrl(),
            'city' => $location->cityName,
            'region' => $location->regionName,
            'country' => $location->countryName,
            'zipcode' => $location->zipCode,
            'timezone' => $location->timezone,
        ]);
    }

    public function contactSend(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'fullname' => 'required|string|max:255',
                'email' => 'required|email|max:255|unique:contactmes',
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
