@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">

                    <div class="card-header">
                        {{ $video->title }}
                        <span class="pull-right">{{ $video->created_at->diffForHumans() }}</span>
                    </div>

                    <div class="card-body">

                        <video width="500" controls poster>
                            <source type="video/mp4" src="{{ asset(Storage::url($video->link)) }}">
                        </video>

                    </div>
                </div>
            </div>
        </div>
        @if(isset($video->quiz))
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            {{ $video->quiz->quiz }}
                            <button type="button" class="btn btn-primary pull-right btn-sm" data-toggle="modal"
                                    data-target="#exampleModal">
                                Add New Option
                            </button>
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <form method="post" action="{{ route('quiz.store') }}"
                                              enctype="multipart/form-data">
                                            <input type="hidden" name="quiz_id" value="{{ $video->quiz->id }}">
                                            @method('post')
                                            @csrf
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add New Quiz</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <label for="option">Option:</label>
                                                    <input id="option" type="text" name="option" class="form-control"
                                                           value="{{ old('option') }}" placeholder="Option Title">
                                                </div>
                                                <div class="form-group">
                                                    <label for="correct">Correct Answer?</label>
                                                    <input id="correct" type="checkbox" name="correct">
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close
                                                </button>
                                                <button type="submit" class="btn btn-primary">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @if(isset($video->quiz->options))
                            <div class="card-body">

                                <table class="table table-hover">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th>Option</th>
                                        <th>Created at</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @forelse($video->quiz->options as $option)
                                        <tr class="{{ $option->correct == true ? 'table-primary' : '' }}">
                                            <th scope="row">{{ $option->id }}</th>
                                            <td>{{ $option->option }}</td>
                                            <td>{{ $option->created_at->diffForHumans() }}</td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <th>No data to show!</th>
                                        </tr>
                                    @endforelse
                                    </tbody>
                                </table>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        @endif
@endsection
