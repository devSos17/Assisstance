<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    use HasFactory;
    protected $fillable = [
        'organizador_id',
        'Nombre',
        'Lugar',
        'Fecha_inicio',
        'Fecha_fin',
        'Capacidad',
        'Ponente',
        'Descripcion'
        
    ];
}


