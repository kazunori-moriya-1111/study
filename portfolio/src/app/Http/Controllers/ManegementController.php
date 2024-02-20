<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;

class ManegementController extends Controller
{
    //
    public function index(Request $request)
    {
        $query_param = $request->query();
        if ($query_param) {
            // クエリパラメータが埋め込まれている場合
        } else {
            // クエリパラメータが埋め込まれていない場合
        }
        $collection = Record::select('date', 'bet', 'payout')->get();
        $data = $collection->all();
        $collection_tmp = Record::select('bet')->where('user_id', 1)->limit(6)->get();
        $graph = $collection_tmp->pluck('bet')->all();
        return view('manegement.index', compact('data', 'graph'));
    }
    public function create()
    {
        $data = [1, 2, 3, 4, 5, 6];
        return view('manegement.create', compact('data'));
    }

    public function store(Request $request)
    {
        $user_id = 1;
        Record::create([
            'user_id' => $user_id,
            'date' => $request->date,
            'bet' => $request->bet,
            'payout' => $request->payout,
            'memo' => $request->memo,
        ]);

        return to_route('manegement.index');
    }
}
