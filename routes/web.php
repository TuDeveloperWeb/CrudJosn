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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/articulo','App\Http\Controllers\ControllerArticulo@index');
Route::get('/show','App\Http\Controllers\ControllerArticulo@show')->name('mostrarDatos');
Route::get('/editar/{id}','App\Http\Controllers\ControllerArticulo@edit');
Route::put('/update','App\Http\Controllers\ControllerArticulo@update');
