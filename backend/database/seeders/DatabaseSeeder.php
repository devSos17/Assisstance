<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Discapacidad;
use App\Models\Estado;
use App\Models\EstadoCivil;
use App\Models\Genero;
use App\Models\Pais;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // ROLES
        foreach (['Super-Admin', 'Admin', 'User', 'Invitado'] as $role) {
            Role::create([
                'nombre' => $role,
            ]);
        }
        // USERS
        // Base users
        User::create([
            'email' => 'invitado',
            'role_id' => 4,
        ]);

        // Generos
        foreach (['H','M','Prefiero no decirlo'] as $role) {
            Genero::create([
                'nombre' => $role,
            ]);
        }

        // PAises | Solo Mexico atm
        $mexico = Pais::create([
            'nombre' => 'Mexico',
            'nacionalidad' => 'Mexicana',
        ]);
        // Estados
        $estados = [
            'Aguascalientes',
            'Baja California',
            'Baja California Sur',
            'Campeche',
            'Chihuahua',
            'Chiapas',
            'Ciudad de México',
            'Coahuila',
            'Colima',
            'Durango',
            'México',
            'Guanajuato',
            'Guerrero',
            'Hidalgo',
            'Jalisco',
            'Michoacán',
            'Morelos',
            'Nayarit',
            'Nuevo León',
            'Oaxaca',
            'Puebla',
            'Querétaro',
            'Quintana Roo',
            'San Luis Potosí',
            'Sinaloa',
            'Sonora',
            'Tabasco',
            'Tamaulipas',
            'Tlaxcala',
            'Veracruz',
            'Yucatán',
            'Zacatecas',
        ];
        foreach ($estados as $estado) {
            Estado::create([
                'nombre' => $estado,
                'pais_id' => $mexico->id,
            ]);
        }
        // Handle extranjeros
        $ext = Pais::create([
            'nombre' => 'Exterior',
            'nacionalidad' => 'Extranjero',
        ]);
        Estado::create([
            'nombre' => 'Extranjero',
            'pais_id' => $ext->id,
        ]);

        // Estados Civiles
        foreach (['soltero', 'casado', 'divorciado', 'concubinato', 'viudo'] as $eCivil) {
            EstadoCivil::create([
                'nombre' => $eCivil,
            ]);
        }
        // Discapacidades
        foreach (['auditiva', 'visual', 'motriz', 'de habla', 'intelectual', 'ninguna'] as $gen) {
            Discapacidad::create([
                'nombre' => $gen,
            ]);
        }
    }
}
