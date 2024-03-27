<?php

namespace App\Http\Livewire;

use Livewire\Component;

class SelectTagModal extends Component
{
    // モーダル内で使用するパラメータ名を定義
    public $showModal = false;
    public $tags;

    public function render()
    {
        return view('livewire.select-tag-modal');
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
