<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'role_id' => 3, // user
            'email' => 'test@example.com',
        ]);
        User::factory()->create([
            'role_id' => 2, // Admin
            'email' => 'admin@example.com',
        ]);
        User::factory()->create([
            'role_id' => 1, // Super-Admin
            'email' => 'super_admin@example.com',
        ]);

    }
}
