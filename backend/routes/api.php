<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EventoController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

require __DIR__.'/auth.php';

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(EventoController::class)->group(function(){
    Route::get('/Eventos', 'index');
    Route::post('/Evento', 'store');
    Route::get('/Evento/{id}', 'show');
    Route::put('/Evento/{id}', 'update');
    Route::delete('/Evento/{id}', 'destroy');
});
