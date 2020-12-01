<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuizOption extends Model
{
    protected $fillable = [
        'quiz_id',
        'option',
        'correct'
    ];
    protected $table    = 'quiz_options';


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function quiz(){
        return $this->belongsTo(Quiz::class);
    }
}
