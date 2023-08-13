<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('eventos', function (Blueprint $table) {

            $table->id();
            $table->unsignedBigInteger('organizador_id');
            $table->string('Nombre');
            $table->string('Lugar');
            $table->dateTime('Fecha_inicio');
            $table->dateTime('Fecha_fin');
            $table->Integer('Capacidad');
            $table->String('Ponente');
            $table->String('Descripcion');
            
            $table->timestamps();

            $table->foreign('organizador_id')->references('id')->on('users')
            ->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('eventos');
    }
};
