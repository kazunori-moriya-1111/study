<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tag;

class Record extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'date',
        'bet',
        'payout',
        'memo',
    ];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
