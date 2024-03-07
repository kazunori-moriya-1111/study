<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;
use App\Models\Tag;
use App\Http\Requests\PostRecordRequest;
use App\Services\CalenderJson;

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
        $data = Record::select('id', 'date', 'bet', 'payout')->get();
        return view('manegement.index', compact('data'));
    }

    public function calendar(Request $request)
    {
        $json_array = CalenderJson::getCalenderJson();
        return view('manegement.calendar', compact('json_array'));
    }

    public function totalling(Request $request)
    {
        $collection = Record::select('bet')->where('user_id', 1)->limit(6)->get();
        $graph = $collection->pluck('bet')->all();
        return view('manegement.totalling', compact('graph'));
    }

    public function create()
    {
        $data = [1, 2, 3, 4, 5, 6];
        return view('manegement.create', compact('data'));
    }

    public function store(PostRecordRequest $request)
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

    public function show($id)
    {
        $record = Record::find($id);

        return view('manegement.show', compact('record'));
    }

    public function edit($id)
    {
        $record = Record::find($id);
        // ログインユーザの所持してるタグを渡す
        $tags = Tag::where('user_id', 1)->get();
        // checkbox用recordに付与されているtag_idの配列を渡す
        $recordTagIdCollection = $record->tags->pluck('id');
        return view('manegement.edit', compact('record', 'tags', 'recordTagIdCollection'));
    }

    public function update(PostRecordRequest $request, $id)
    {
        $record = Record::find($id);
        $record->date = $request->date;
        $record->bet = $request->bet;
        $record->payout = $request->payout;
        $record->memo = $request->memo;
        $record->save();

        return to_route('manegement.index');
    }

    public function destroy($id)
    {
        $record = Record::find($id);
        $record->delete();

        return to_route('manegement.index');
    }
}
