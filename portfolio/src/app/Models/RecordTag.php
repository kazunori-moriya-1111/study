<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecordTag extends Model
{
    use HasFactory;

    protected $fillable = [
        'record_id',
        'tag_id',
    ];

    protected $table = 'record_tag';
}
