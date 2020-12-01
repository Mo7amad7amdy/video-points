<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Point extends Model
{
    protected $fillable = [
        'user_id',
        'video_id',
        'quiz_id',
        'score',
        'status_message',
    ];
    protected $table    = 'points';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function points(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
