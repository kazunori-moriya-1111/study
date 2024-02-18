<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManegementController extends Controller
{
    //
    public function index(Request $request)
    {
        $data = [1, 2, 3, 4, 5, 6];
        return view('manegement.index', compact('data'));
    }
    public function create()
    {
        $data = [1, 2, 3, 4, 5, 6];
        return view('manegement.create', compact('data'));
    }
}
