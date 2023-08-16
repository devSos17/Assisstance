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
        Schema::create('RegistrosUsuarios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('Users');
            $table->string('nombre');
            $table->string('ape_pat');
            $table->string('ape_mat');
            $table->integer('edad');
            $table->foreignId('genero_id')->references('id')->on('Generos');
            $table->foreignId('nacionalidad_id')->references('id')->on('Paises');
            $table->foreignId('estado_id')->references('id')->on('Estados');
            $table->foreignId('estado_civil_id')->references('id')->on('EstadoCivil');
            $table->string('comunidad_indigena')->nullable();
            $table->string('lengua_indigena')->nullable();
            $table->foreignId('discapacidad_id')->references('id')->on('Discapacidades');
            $table->string('dependencia');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registro_usuarios');
    }
};