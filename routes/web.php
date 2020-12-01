<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::middleware('admin')->prefix('admin')->group(function () {
    Route::resource('videos', 'Admin\VideoController');
    Route::resource('quiz', 'Admin\QuizController');
    Route::resource('users', 'Admin\UserController');
});
Route::middleware('auth')->group(function () {
    Route::get('/home', 'HomeController@index');
    Route::get('/', 'HomeController@index')->name('home');
    Route::get('video/{id}', 'Web\VideoController@show')->name('video.show');
    Route::post('video/end/{id}', 'Web\VideoController@endVideo')->name('video.endVideo');
    Route::post('video/answers', 'Web\VideoController@answers')->name('video.answers');
});
