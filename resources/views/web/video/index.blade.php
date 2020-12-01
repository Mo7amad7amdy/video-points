@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ $video->title }}</div>

                    <div class="card-body text-center">
                        <video width="500" controls poster id="video">
                            <source type="video/mp4" src="{{ asset(Storage::url($video->link)) }}">
                        </video>
                    </div>
                </div>
            </div>
        </div>
        @if(isset($video->quiz->quiz))
            <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ $video->quiz->quiz }}</div>
                    @if(count($video->quiz->options))
                        <form method="post" action="{{ route('video.answers') }}">
                            @csrf
                            @method('post')
                            <div class="card-body text-center">
                                <div class="form-group">
                                    @foreach($video->quiz->options as $option)
                                        <label>{{ $option->option }}
                                            <input type="radio" value="{{ $option->id }}" name="option_id">
                                        </label>
                                    @endforeach
                                </div>
                                <input type="submit" value="Answer" class="btn btn-primary">
                            </div>
                        </form>
                    @endif
                </div>
            </div>
        </div>
        @endif
    </div>
@endsection
@section('js')
    <script>
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        var video = document.getElementById("video");
        function videoStoppedPlaying(event) {
            if(event.type==="ended") {
                $.ajax({
                    url: '{{ route('video.endVideo', $video->id) }}',
                    type: 'post'
                });
            }
        }
        video.addEventListener("ended", videoStoppedPlaying);
    </script>
@endsection
