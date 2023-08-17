<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->name('auth.')->group(function () {
    Route::post("login", [AuthController::class, 'login'])->name('login');
    Route::post("register", [AuthController::class, 'register'])->name('register');
    Route::middleware('auth:sanctum')->get("status", function () {
        return response()->json([
            "message" => "loggedin",
            "status" => 1,
        ], 200);
    })->name('status');
    Route::get("invitado", [AuthController::class, 'invitado'])->name('register');
});
