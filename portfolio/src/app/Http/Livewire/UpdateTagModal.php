<?php

namespace App\Http\Livewire;

use Livewire\Component;

class UpdateTagModal extends Component
{
    // モーダル内で使用するパラメータ名を定義
    public $showModal = false;
    public $tag_id;
    public $name;

    public function render()
    {
        return view('livewire.update-tag-modal');
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
