<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;
use App\Models\Tag;
use App\Models\User;
use App\Http\Requests\PostRecordRequest;
use App\Services\CalenderJson;
use App\Services\ChartJson;

class ManegementController extends Controller
{
    //
    public function index(Request $request)
    {
        $user_id = User::select('id')->where('name', 'test_user')->first()->id;
        $query_param = $request->query();
        // クエリパラメータが存在する場合
        if ($query_param) {
            // tagidクエリパラメータが存在する場合
            if ($query_param["tagid"]) {
                $tagids = explode(',', $query_param["tagid"]);
                // クエリパラメータが埋め込まれている場合
                $data = Record::join('record_tag', 'records.id', '=', 'record_tag.record_id')
                    ->select('id', 'date', 'bet', 'payout', 'recovery_rate', 'record_tag.tag_id')
                    ->whereIn('record_tag.tag_id', $tagids)
                    ->get();
            }
            // sordクエリパラメータが存在する場合
        } else {
            // クエリパラメータが埋め込まれていない場合
            $data = Record::select('id', 'date', 'bet', 'payout', 'recovery_rate')
                ->where('user_id', $user_id)
                ->get();
        }
        $tags = Tag::select('id', 'name')->where('user_id', $user_id)->get();
        $total_bet = $data->sum('bet');
        $total_payout = $data->sum('payout');
        $recovery_rate = $total_bet == 0 ? 0 : round(($total_payout / $total_bet) * 100, 1);
        return view('manegement.index', compact('data', 'tags', 'total_bet', 'total_payout', 'recovery_rate'));
    }

    public function calendar(Request $request)
    {
        $json_array = CalenderJson::getCalenderJson();
        return view('manegement.calendar', compact('json_array'));
    }

    public function totalling(Request $request)
    {
        $type = $request->type;
        $data = ChartJson::getChartJson($type);
        $title = $data['title'];
        $total_bet = $data['total_bet'];
        $total_payout = $data['total_payout'];
        return view('manegement.totalling', compact('title', 'total_bet', 'total_payout', 'type'));
    }

    public function create()
    {
        return view('manegement.create');
    }

    public function store(PostRecordRequest $request)
    {
        $user_id = User::select('id')->where('name', 'test_user')->first()->id;
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
        $user_id = User::select('id')->where('name', 'test_user')->first()->id;
        // ログインユーザの所持してるタグを渡す
        $tags = Tag::where('user_id', $user_id)->get();
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
