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
    // indexの基本メソッドを定義
    private function base_index(Request $request, $sort_param)
    {
        $user_id = User::select('id')->where('name', 'test_user')->first()->id;
        $query_param = $request->query();
        // ソートパラム判定配列定義
        $sort_isActive = array('date' => False, 'recovery_rate' => False, 'bet' => False, 'payout' => False);
        if ($sort_param != '') {
            $sort_isActive[$sort_param] = True;
        }

        if ($query_param) {
            // tagidURLパラメータが存在する場合
            $tagids = explode(',', $query_param["tagid"]);
            if ($sort_param == '') {
                // ソートが不要な場合
                $data = Record::join('record_tag', 'records.id', '=', 'record_tag.record_id')
                    ->select('id', 'date', 'bet', 'payout', 'recovery_rate', 'record_tag.tag_id')
                    ->whereIn('record_tag.tag_id', $tagids)
                    ->paginate(5);
            } else {
                // ソートが必要な場合
                $data = Record::join('record_tag', 'records.id', '=', 'record_tag.record_id')
                    ->select('id', 'date', 'bet', 'payout', 'recovery_rate', 'record_tag.tag_id')
                    ->whereIn('record_tag.tag_id', $tagids)
                    ->orderBy($sort_param)
                    ->paginate(5);
            }
        } else {
            // tagidクエリパラメータが存在しない場合
            if ($sort_param == '') {
                // ソートが不要な場合
                $data = Record::select('id', 'date', 'bet', 'payout', 'recovery_rate')
                    ->where('user_id', $user_id)
                    ->paginate(5);
            } else {
                // ソートが必要な場合
                $data = Record::select('id', 'date', 'bet', 'payout', 'recovery_rate')
                    ->where('user_id', $user_id)
                    ->orderBy($sort_param)
                    ->paginate(5);
            }
        }
        $tags = Tag::select('id', 'name')->where('user_id', $user_id)->get();
        // URLパラメータに含まれているidの判別カラムを追加
        $tags = $tags->map(function ($tag) use ($query_param) {
            if ($query_param and in_array($tag->id, explode(',', $query_param["tagid"]))) {
                $tag['isActive'] = True;
            } else {
                $tag['isActive'] = False;
            }
            return $tag;
        });

        // TODO ページネーションした値ごとの計算になっている
        $total_bet = $data->sum('bet');
        $total_payout = $data->sum('payout');
        $recovery_rate = $total_bet == 0 ? 0 : round(($total_payout / $total_bet) * 100, 1);
        return view('manegement.index', compact('data', 'tags', 'total_bet', 'total_payout', 'recovery_rate', 'sort_isActive'));
    }

    public function index(Request $request)
    {
        return $this->base_index($request, '');
    }

    public function sort_date_index(Request $request)
    {
        return $this->base_index($request, 'date');
    }

    public function sort_recovery_rate_index(Request $request)
    {
        return $this->base_index($request, 'recovery_rate');
    }

    public function sort_bet_index(Request $request)
    {
        return $this->base_index($request, 'bet');
    }

    public function sort_payout_index(Request $request)
    {
        return $this->base_index($request, 'payout');
    }

    public function calendar(Request $request)
    {
        $json_array = CalenderJson::getCalenderJson();
        return view('manegement.calendar', compact('json_array'));
    }

    private function base_totalling(Request $request, $period_param)
    {
        // 選択された期間は判別する配列を定義
        $selected_period = array('day' => False, 'week' => False, 'year' => False);
        $selected_period[$period_param] = True;
        $data = ChartJson::getChartJson($period_param);
        $title = $data['title'];
        $total_bet = $data['total_bet'];
        $total_payout = $data['total_payout'];
        return view('manegement.totalling', compact('title', 'total_bet', 'total_payout', 'selected_period'));
    }

    public function totalling_date(Request $request)
    {
        return $this->base_totalling($request, 'day');
    }

    public function totalling_week(Request $request)
    {
        return $this->base_totalling($request, 'week');
    }

    public function totalling_year(Request $request)
    {
        return $this->base_totalling($request, 'year');
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
            'recovery_rate' => $request->bet == 0 ? 0 : round(($request->payout / $request->bet) * 100, 1),
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
        $record->recovery_rate = $request->bet == 0 ? 0 : round(($request->payout / $request->bet) * 100, 1);
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
