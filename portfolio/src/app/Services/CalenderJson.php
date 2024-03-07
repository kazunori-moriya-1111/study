<?php

namespace App\Services;

use App\Models\Record;

class CalenderJson
{
    public static function getCalenderJson()
    {
        $user_id = 1;
        $record = Record::select('id', 'date', 'bet', 'payout')->where('user_id', $user_id)->get();
        $json_array = array(
            json_encode(["title" => "1.3k", "start" => "2024-02-04", "classNames" => 'minus'], JSON_UNESCAPED_UNICODE),
            json_encode(["title" => "収支", "start" => "2024-03-02", "classNames" => 'minus'], JSON_UNESCAPED_UNICODE),
            json_encode(["title" => "収支", "start" => "2024-03-04", "classNames" => 'plus'], JSON_UNESCAPED_UNICODE),
        );
        return $json_array;
    }
}
