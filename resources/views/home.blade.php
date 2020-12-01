@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card-columns">
                @forelse($videos as $video)

                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title"><a href="{{ route('video.show', $video->id) }}">{{ $video->title }}</a></h5>
                            <p class="card-text"><small class="text-muted">Created from {{ $video->created_at->diffForHumans() }}</small></p>
                        </div>
                    </div>

                @empty
                    No Data to Show!
                @endforelse
            </div>
        </div>
    </div>
</div>
@endsection
