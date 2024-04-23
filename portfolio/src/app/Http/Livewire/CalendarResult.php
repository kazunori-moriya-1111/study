<?php

namespace App\Http\Livewire;

use Livewire\Component;

class CalendarResult extends Component
{
    public $data;
    protected $listeners = ['refreshComponentWithData'];

    public function refreshComponentWithData($newData)
    {
        // データを受け取り、コンポーネントのプロパティにセットする
        $this->data = $newData;

        // 再レンダリングをトリガーする
        $this->render();
    }

    public function render()
    {
        if (!(is_null($this->data))) {
            $data = $this->data;
        } else {
            $data = Null;
        }
        return view('livewire.calendar-result', compact('data'));
    }
}
