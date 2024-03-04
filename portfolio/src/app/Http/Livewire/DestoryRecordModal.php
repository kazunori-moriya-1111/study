<?php

namespace App\Http\Livewire;

use Livewire\Component;

class DestoryRecordModal extends Component
{
    public $showModal = false;
    public $record;

    public function render()
    {
        return view('livewire.destory-record-modal');
    }

    public function openModal()
    {
        $this->showModal = true;
    }

    public function closeModal()
    {
        $this->showModal = false;
    }
}
