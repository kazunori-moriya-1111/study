<?php

namespace App\Http\Livewire;

use Livewire\Component;

class CalendarResult extends Component
{
    public $str = Null;
    public $data = Null;
    public $year = Null;
    public $month = Null;
    protected $listeners = ['refreshComponentWithData'];

    public function refreshComponentWithData($newData)
    {
        // データを受け取り、コンポーネントのプロパティにセットする
        $this->str = $newData;

        // 再レンダリングをトリガーする
        $this->render();
    }

    public function render()
    {
        if (!(is_null($this->str))) {
            $data = explode(' ', $this->str);
            $this->year = $data[2];
            $this->month = $data[1];
        }
        return view('livewire.calendar-result', ['date' => $this->str, 'year' => $this->year, 'month' => $this->month]);
    }
}
