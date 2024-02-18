<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManegementController extends Controller
{
    //
    public function index()
    {
        $data = [1, 2, 3, 4, 5, 6];
        return view('manegement', compact('data'));
    }
}
