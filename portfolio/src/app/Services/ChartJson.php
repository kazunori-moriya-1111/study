<?php

namespace App\Services;

use App\Models\Record;

class ChartJson
{
    /**
     * 日次,週次,月次別にグラフに表示するデータをDBから取得、成形
     *
     * @param string type 
     * @return array{ title: string[], total_bet: int[], total_payout: int[]}
     */
    public static function getChartJson($type)
    {
        // type別の集計、7期間分の補完ロジック
        $record = null;
        $user_id = 1;
        $from = null;
        $to = null;
        $title = null;
        $total_bet = null;
        $total_payout = null;
        // $type = $request->type;
        // todo periodNoを使用して表示する期間を変数で変更できるようにする
        // 日単位での集計
        if ($type == 'day') {
            // DBからデータ取得
            $to = date('Y-m-d');
            $from = date('Y-m-d', strtotime('-6 day'));
            $record = Record::select('bet', 'payout', 'date')
                ->where('user_id', $user_id)
                ->whereBetween('date', [$from, $to])
                ->get()
                ->groupBy('date');
            //groupby sum
            $tmp = collect();
            $record->each(function ($row, $key) use ($tmp) {
                $tmp->push([
                    'date' => $key,
                    'total_bet' => $row->sum('bet'),
                    'total_payout' => $row->sum('payout')
                ]);
            });
            // データ補完
            if ($tmp->count() <= 6) {
                // 期間配列作る
                $diff = (strtotime($to) - strtotime($from)) / (60 * 60 * 24);
                $period = collect();
                for ($i = 0; $i <= $diff; $i++) {
                    $period->push(date('Y-m-d', strtotime($from . '+' . $i . 'days')));
                }
                // eachで一つ一つの期間の有無を確認。なければ期間とtotal_bet => 0, total_payout => 0を埋める
                $getDataDate = $tmp->pluck('date');
                $period->each(function ($date) use ($getDataDate, $tmp) {
                    if (!($getDataDate->contains($date))) {
                        $tmp->push([
                            'date' => $date,
                            'total_bet' => 0,
                            'total_payout' => 0
                        ]);
                    }
                });
            }
            // 日付順にソート
            $sortedData = $tmp->sortBy('date');
            // グラフ表示用に成形
            $title = $sortedData->pluck('date')->all();
            $total_bet = $sortedData->pluck('total_bet')->all();
            $total_payout = $sortedData->pluck('total_payout')->all();
        }
        // 週単位での集計
        if ($type == 'week') {
            // DBからデータ取得
            $to = date('Y-m-d');
            $fromDay = date('Y-m-d', strtotime('-6 week'));
            $fromDayNo = date('w', strtotime($fromDay));
            $from = date('Y-m-d', strtotime("-{$fromDayNo} day", strtotime($fromDay)));
            $record = Record::select('bet', 'payout', 'date')
                ->where('user_id', $user_id)
                ->whereBetween('date', [$from, $to])
                ->get();
            // dateからweekを算出
            $recordAddWeek = $record->map(function ($row) {
                $weekNo = date('w', strtotime($row->date));
                $week = date('Y-m-d', strtotime("-{$weekNo} day", strtotime($row->date)));
                // dd($weekNo, $row->date, $week);
                return [
                    'week' => $week,
                    'bet' => $row->bet,
                    'payout' => $row->payout
                ];
            })->groupBy('week');
            //groupby sum
            $tmp = collect();
            $recordAddWeek->each(function ($row, $key) use ($tmp) {
                $tmp->push([
                    'week' => $key,
                    'total_bet' => $row->sum('bet'),
                    'total_payout' => $row->sum('payout')
                ]);
            });
            // データ補完
            if ($tmp->count() <= 6) {
                // 期間配列作る
                $toWeekNo = date('w', strtotime($to));
                $weekstartTo = date('Y-m-d', strtotime("-{$toWeekNo} day", strtotime($to)));
                $fromWeekNo = date('w', strtotime($from));
                $weekStartFrom = date('Y-m-d', strtotime("-{$fromWeekNo} day", strtotime($from)));;
                $diff = (strtotime($weekstartTo) - strtotime($weekStartFrom)) / (60 * 60 * 24 * 7);
                $period = collect();
                for ($i = 0; $i <= $diff; $i++) {
                    $period->push(date('Y-m-d', strtotime($weekStartFrom . '+' . 7 * $i . 'days')));
                }
                // dd($period);
                // eachで一つ一つの期間の有無を確認。なければ期間とtotal_bet => 0, total_payout => 0を埋める
                $getDataDate = $tmp->pluck('week');
                $period->each(function ($week) use ($getDataDate, $tmp) {
                    if (!($getDataDate->contains($week))) {
                        $tmp->push([
                            'week' => $week,
                            'total_bet' => 0,
                            'total_payout' => 0
                        ]);
                    }
                });
            }
            // 日付順にソート
            $sortedData = $tmp->sortBy('week');
            // グラフ表示用に成形
            $title = $sortedData->pluck('week')->all();
            $total_bet = $sortedData->pluck('total_bet')->all();
            $total_payout = $sortedData->pluck('total_payout')->all();
        }
        // 年単位での集計
        if ($type == 'year') {
            // DBからデータ取得
            $to = date('Y-m-d');
            $year = date('Y', strtotime('-6 year'));
            $from = date('Y-m-d', strtotime("{$year}-01-01"));
            $record = Record::select('bet', 'payout', 'date')
                ->where('user_id', $user_id)
                ->whereBetween('date', [$from, $to])
                ->get();
            // dateからyaerを算出
            $recordAddYaer = $record->map(function ($row) {
                $yaer = date('Y', strtotime($row->date));
                return [
                    'yaer' => $yaer,
                    'bet' => $row->bet,
                    'payout' => $row->payout
                ];
            })->groupBy('yaer');
            //groupby sum
            $tmp = collect();
            $recordAddYaer->each(function ($row, $key) use ($tmp) {
                $tmp->push([
                    'yaer' => $key,
                    'total_bet' => $row->sum('bet'),
                    'total_payout' => $row->sum('payout')
                ]);
            });
            // データ補完
            if ($tmp->count() <= 6) {
                // 期間配列作る
                $period = collect();
                $year = date('Y', strtotime($from));
                for ($i = 0; $i <= 6; $i++) {
                    $period->push($year + $i);
                }
                // eachで一つ一つの期間の有無を確認。なければ期間とtotal_bet => 0, total_payout => 0を埋める
                $getDataYaer = $tmp->pluck('yaer');
                $period->each(function ($yaer) use ($getDataYaer, $tmp) {
                    if (!($getDataYaer->contains($yaer))) {
                        $tmp->push([
                            'yaer' => $yaer,
                            'total_bet' => 0,
                            'total_payout' => 0
                        ]);
                    }
                });
            }
            // 日付順にソート
            $sortedData = $tmp->sortBy('yaer');
            // グラフ表示用に成形
            $title = $sortedData->pluck('yaer')->all();
            $total_bet = $sortedData->pluck('total_bet')->all();
            $total_payout = $sortedData->pluck('total_payout')->all();
        }
        return array("title" => $title, "total_bet" => $total_bet, "total_payout" => $total_payout);
    }
}
