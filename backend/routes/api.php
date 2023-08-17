<?php

use App\Http\Controllers\AsistenciaController;
use App\Models\EstadoCivil;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventoController;
use App\Models\Discapacidad;
use App\Models\Estado;
use App\Models\Genero;
use App\Models\Pais;

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

require __DIR__ . '/auth.php';

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Loged in ""

Route::middleware('auth:sanctum')->group(function () {

    Route::controller(EventoController::class)->group(function () {
        Route::get('/Eventos', 'index');
        Route::get('/Eventos/user', 'user');
        Route::post('/Evento', 'store');
        Route::get('/Evento/{id}', 'show');
        Route::put('/Evento/{id}', 'update');
        Route::delete('/Evento/{id}', 'destroy');
    });
    Route::post('/asistencias', [AsistenciaController::class, 'store']);
});

// Rutas estaticas
Route::get('/generos', function () {
    return response()->json(Genero::all());
});
Route::get('/nacionalidad', function () {
    return response()->json(Pais::all());
});
Route::get('/estados', function () {
    return response()->json(Estado::all());
});
Route::get('/estadoCivil', function () {
    return response()->json(EstadoCivil::all());
});
Route::get('/discapacidad', function () {
    return response()->json(Discapacidad::all());
});
