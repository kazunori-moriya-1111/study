<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tag;

class Record extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'user_id',
        'date',
        'bet',
        'payout',
        'recovery_rate',
        'memo',
    ];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
