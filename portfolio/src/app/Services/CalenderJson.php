<?php

namespace App\Services;

use App\Models\Record;

class CalenderJson
{
    public static function getCalenderJson()
    {
        $user_id = 1;
        $record = Record::select('date')
            ->selectRaw('SUM(bet) - SUM(payout) AS day_result')
            ->where('user_id', $user_id)
            ->groupBy('date')
            ->get();
        $json_array = $record->map(function ($row) {
            return json_encode(["title" => $row->day_result, 'start' => $row->date, 'classNames' => $row->day_result > 0 ? 'plus' : 'minus'], JSON_UNESCAPED_UNICODE);
        });
        return $json_array;
    }
}
