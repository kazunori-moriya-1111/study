<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Record;

class Tag extends Model
{
    use HasFactory;

    public function records()
    {
        return $this->belongsToMany(Record::class);
    }
}
