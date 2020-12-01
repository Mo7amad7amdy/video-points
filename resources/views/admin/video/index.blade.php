@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        {{ __('Videos') }}
                        <button type="button" class="btn btn-primary pull-right btn-sm" data-toggle="modal" data-target="#exampleModal">
                            Add New
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <form method="post" action="{{ route('videos.store') }}" enctype="multipart/form-data">
                                        @method('post')
                                        @csrf
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Add New Video</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="form-group">
                                                <label for="title">Video Title</label>
                                                <input id="title" type="text" name="title" class="form-control" value="{{ old('title') }}" placeholder="Enter Video Title" required>
                                            </div>
                                            <div class="form-group">
                                                <input type="file" name="file" required>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" name="quiz" class="form-control" value="{{ old('quiz') }}" placeholder="Enter Quiz" required>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        @error('title')
                            <div class="alert alert-warning" role="alert">
                                {{ $message }}
                            </div>
                        @enderror
                        @error('file')
                            <div class="alert alert-warning" role="alert">
                                {{ $message }}
                            </div>
                        @enderror
                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th>Title</th>
                                <th>Time</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @forelse($videos as $video)
                            <tr>
                                <th scope="row">{{ $video->id }}</th>
                                <td><a href="{{ asset(Storage::url($video->link)) }}" target="_blank">{{ $video->title }}</a></td>
                                <td>{{ $video->created_at->diffForHumans() }}</td>
                                <td>
                                    <a href="{{ route('videos.show', $video->id) }}" class="btn btn-primary btn-sm">Open</a>
                                    <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete">
                                        Delete
                                    </button>
                                    <!-- Modal -->
                                    <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <form method="post" action="{{ route('videos.destroy', $video->id) }}">
                                                    @method('DELETE')
                                                    @csrf
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Delete {{ $video->title }}</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Are You Sure?
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="submit" class="btn btn-danger">Delete</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            @empty
                                <tr><th>No data to show!</th></tr>
                                @endforelse
                            </tbody>
                        </table>
                        {{ $videos->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
