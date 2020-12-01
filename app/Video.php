<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = [
        'title',
        'link'
    ];
    protected $table    = 'videos';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function quiz(){
        return $this->hasOne(Quiz::class);
    }
}
