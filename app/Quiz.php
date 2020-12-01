<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    protected $fillable = [
        'video_id',
        'quiz'
    ];
    protected $table    = 'quizzes';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function videos(){
        return $this->belongsTo(Video::class, 'video_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function options(){
        return $this->hasMany(QuizOption::class);
    }
}
