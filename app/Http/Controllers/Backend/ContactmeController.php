<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Contactme;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactmeController extends Controller
{
    public function index(Request $request)
    {
        $currentPage = 'contactme-admin';
        $breadcrumb = [
            ['url' => route('contactme.admin'), 'label' => 'Contact Me'],
            ['label' => 'Contact Me Admin'],
        ];

        $perPage = $request->has('perPage') ? $request->perPage : 10;
        $page = $request->has('page') ? $request->page : 1;

        $query = Contactme::latest();

        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('fullname', 'like', '%' . $searchTerm . '%')
                    ->orWhere('email', 'like', '%' . $searchTerm . '%');
            });
        }

        $contactme = $query->paginate($perPage, ['*'], 'page', $page);

        return Inertia::render('Contactme/Index', [
            'breadcrumb' => $breadcrumb,
            'currentPage' => $currentPage,
            'contactme' => $contactme,
            'perPage' => $perPage,
            'nowPage' => $page,
        ]);
    }

    public function delete($id)
    {
        $contact = Contactme::find($id);

        if (!$contact) {
            return redirect(route('contact.admin'))->with([
                'message' => 'Contactme not found',
                'type' => 'error'
            ]);
        }

        $contact->delete();

        return redirect(route('contactme.admin'))->with([
            'message' => 'Successfully deleted contact message',
            'type' => 'success'
        ]);
    }

    public function deleteSelected(Request $request)
    {

        $ids = $request->input('ids');
        Contactme::destroy($ids);

        return redirect(route('contactme.admin'))->with([
            'message' => 'Successfully deleted selected contactme',
            'type' => 'success'
        ]);
    }
}
