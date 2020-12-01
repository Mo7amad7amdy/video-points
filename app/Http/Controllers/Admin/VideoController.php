<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Quiz;
use App\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller
{
    /**
     * VideoController constructor.
     */
    public function __construct()
    {
        $this->middleware('admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $videos = Video::paginate(15);
        return view('admin.video.index', compact('videos'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title'           => 'required|max:191',
            'file'            => 'required|mimes:mp4',
            'quiz'            => 'required',
        ]);
        $videoName      = time() . $request->file->getClientOriginalName();
        $request->file('file')->storeAs('videos', $videoName, 'public');
        $video = Video::create([
            'title'     => $request->title,
            'link'      => 'videos/'.$videoName
        ]);
        Quiz::create([
            'quiz'      => $request->quiz,
            'video_id'  => $video->id,
        ]);
        toastr()->success('Video Created Successfully');
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $video = Video::findOrFail($id);
        return view('admin.video.show', compact('video'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $file = Video::find($id);
        $exists = Storage::disk('public')->exists($file->link);
        if ($exists){
            $file->delete();
            Storage::disk('public')->delete($file->link);
            toastr()->success('Video Deleted');
            return back();
        }
        toastr()->warning('Something warning!');
        return back();
    }
}
