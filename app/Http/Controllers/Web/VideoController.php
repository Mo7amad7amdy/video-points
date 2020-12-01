<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Notifications\AnsweredQuizController;
use App\Point;
use App\QuizOption;
use App\User;
use App\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show($id)
    {
        $video = Video::with(['quiz', 'quiz.options'])->find($id);
        if (auth()->user()->type == 0){
            Point::firstOrCreate([
                'user_id'           => auth()->user()->id,
                'video_id'          => $id,
                'score'             => 5,
                'status_message'    => 'You Got 5 Points For Open This Video',
            ]);
        }
        return view('web.video.index', compact('video'));
    }

    public function endVideo($id){
        if (auth()->user()->type == 0){
            Point::firstOrCreate([
                'user_id'           => auth()->user()->id,
                'video_id'          => $id,
                'score'             => 10,
                'status_message'    => 'You Got 10 Points For watching This Video',
            ]);
        }
    }

    public function answers(Request $request, User $user){
        $option = QuizOption::find($request->option_id);

        if ($option && $option->correct == true){
            Point::firstOrCreate([
                'user_id'           => auth()->user()->id,
                'quiz_id'           => $option->quiz->id,
                'score'             => 10,
                'status_message'    => 'You Got 10 Points For Answers the Quiz',
            ]);
            // add this to send a notification
//            dd($option->quiz->id);
            $user->notify(new AnsweredQuizController(auth()->user()));
            toastr()->success('Your Answers is Correct');
            return back();
        }
        toastr()->warning('Your Answers is not Correct');
        return back();

    }
}
