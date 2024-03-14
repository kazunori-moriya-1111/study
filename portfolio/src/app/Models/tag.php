<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Record;

class Tag extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'user_id',
        'name',
    ];

    public function records()
    {
        return $this->belongsToMany(Record::class);
    }
}
