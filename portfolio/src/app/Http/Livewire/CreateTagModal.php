<?php

namespace App\Http\Livewire;

use Livewire\Component;

class CreateTagModal extends Component
{
    // モーダル内で使用するパラメータ名を定義
    public $showModal = false;
    public $name;

    public function render()
    {
        return view('livewire.create-tag-modal');
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
