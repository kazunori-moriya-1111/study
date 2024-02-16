<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChartjsController extends Controller
{
    //
    public function index()
    {
        $data = [1, 2, 3, 4, 5, 6];
        return view('chartjs', compact('data'));
    }
}
