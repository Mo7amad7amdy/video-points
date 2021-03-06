<?php

namespace App\Http\Controllers;

use App\Video;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $videos = Video::all();
        if (isset($videos) && count($videos) > 3)
            $videos->random(3);
        return view('home', compact('videos'));
    }
}
