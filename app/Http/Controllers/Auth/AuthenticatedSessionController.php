<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\AnalyticsLogin;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Jenssegers\Agent\Agent;
use Stevebauman\Location\Facades\Location;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    function getMAcAddressExec()
    {
        return substr(exec('getmac'), 0, 17);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {

        $agent = new Agent();
        $location = Location::get();

        $request->authenticate();

        $request->session()->regenerate();
        AnalyticsLogin::create([
            'user_id' => Auth::user()->id,
            'login_time' => now(),
            'logout_time' => null,
            'operating_system' => $agent->platform(),
            'ip_address' => $request->getClientIp(),
            'user_agent' => request()->header('User-Agent'),
            'browser' => $agent->browser(),
            'browser_version' => $agent->version($agent->browser()),
            'device' => $agent->device(),
            'platform' => $agent->platform(),
            'city' => $location->cityName,
            'region' => $location->regionName,
            'country' => $location->countryName,
            'zipcode' => $location->zipCode,
            'timezone' => $location->timezone,
            'status' => 'Successful'

        ]);

        return redirect(route('dashboard'))->with([
            'message' => 'Welcome Admin',
            'type' => 'success'
        ]);

        // return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $agent = new Agent();
        $location = Location::get();

        AnalyticsLogin::create([
            'user_id' => Auth::user()->id,
            'login_time' => null,
            'logout_time' => now(),
            'operating_system' => $agent->platform(),
            'ip_address' => $request->getClientIp(),
            'user_agent' => request()->header('User-Agent'),
            'browser' => $agent->browser(),
            'browser_version' => $agent->version($agent->browser()),
            'device' => $agent->device(),
            'platform' => $agent->platform(),
            'city' => $location->cityName,
            'region' => $location->regionName,
            'country' => $location->countryName,
            'zipcode' => $location->zipCode,
            'timezone' => $location->timezone,
            'status' => 'Successful'
        ]);

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();



        return redirect('/');
    }
}
