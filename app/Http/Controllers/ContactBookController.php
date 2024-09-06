<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactBookRequest;
use App\Http\Requests\UpdateContactBookRequest;
use App\Models\ContactBook;
use App\Models\Contact;
use Illuminate\Support\Facades\Auth;

class ContactBookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId =  Auth::id();

        $contactBooks = ContactBook::where('user_id',  $userId)->get();

        return inertia("ContactBook/Index", [
            "contactBooks" => $contactBooks
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        info("RODEI");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactBookRequest $request)
    {

    }

    /**
     * Display the specified resource.
     */
    public function show(ContactBook $contactBook)
    {
        $userId =  Auth::id();

        $contacts = Contact::where('user_id',  $userId)->get();

        return inertia("Contact/Index", [
            "contacts" => $contacts
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContactBook $contactBook)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactBookRequest $request, ContactBook $contactBook)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContactBook $contactBook)
    {
        //
    }
}
