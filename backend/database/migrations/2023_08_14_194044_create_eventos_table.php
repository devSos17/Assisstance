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
        Schema::create('Eventos', function (Blueprint $table) {

            $table->id();
            $table->foreignId('organizador_id')->references('id')->on('Users')->onUpdate('cascade')->onDelete('cascade');
            $table->string('Nombre');
            $table->string('Lugar');
            $table->date('Fecha');
            $table->integer('Duracion');
            $table->integer('Capacidad');
            $table->string('Ponente');
            $table->text('Descripcion');

            $table->timestamps();

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
