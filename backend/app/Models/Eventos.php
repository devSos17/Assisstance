<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    use HasFactory;

    protected $table = "Eventos";

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
    public function asistencias()
    {
        return $this->belongsToMany(Eventos::class, 'evento_id', 'user_registro_id');
    }

    public function usuario()
    {
        return $this->belongsTo(User::class, 'organizador_id');
    }
}
