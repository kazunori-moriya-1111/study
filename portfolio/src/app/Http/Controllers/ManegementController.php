<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;

class ManegementController extends Controller
{
    //
    public function index(Request $request)
    {
        $collection = Record::select('bet')->where('user_id', 1)->limit(6)->get();
        $data = $collection->pluck('bet')->all();
        return view('manegement.index', compact('data'));
    }
    public function create()
    {
        $data = [1, 2, 3, 4, 5, 6];
        return view('manegement.create', compact('data'));
    }
}
