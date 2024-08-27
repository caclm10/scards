<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CardImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
    ];

    public function card(): BelongsTo
    {
        return $this->belongsTo(Card::class);
    }
}
