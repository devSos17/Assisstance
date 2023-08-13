<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RegistroUsuario extends Model
{
    use HasFactory;

    protected $table = 'RegistrosUsuarios';

    protected $fillable = [
        'user_id',
        'nombre',
        'ape_pat',
        'ape_mat',
        'edad',
        'genero_id',
        'nacionalidad_id',
        'estado_id',
        'estado_civil_id',
        'comunidad_indigena',
        'lengua_indigena',
        'discapacidad_id',
        'dependencia',
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class);
    }

    public function nacionalidad()
    {
        return $this->belongsTo(Pais::class);
    }

    public function estado()
    {
        return $this->belongsTo(Estado::class);
    }

    public function estadoCivil()
    {
        return $this->belongsTo(EstadoCivil::class);
    }

    public function discapacidad()
    {
        return $this->belongsTo(Discapacidad::class);
    }
}
