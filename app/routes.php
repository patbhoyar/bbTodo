<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::resource('todo', 'TodoController');
Route::POST('todo/create', 'TodoController@store');
Route::PUT('todo/update/{id}', 'TodoController@update');
Route::DELETE('todo/delete/{id}', 'TodoController@destroy');

Route::get('/', function()
{
	return View::make('index');
});