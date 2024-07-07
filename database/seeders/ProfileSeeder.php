<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('profiles')->insert([
            'name' => 'Ridho Amdeni',
            'country' => 'Indonesia',
            'phone' => '081365200863',
            'email' => 'secretridho26@gmail.com',
            'address' => 'Jalan Masjid Raya No 97A Larangan Selatan',
            'typed' => '[
                "Fullstack Developer",
                1000,
                "Coder",
                1000,
                "Web Developer",
                1000,
                "Problem Solver",
                1000
            ]',
            'age' => '29',
            'city' => 'Kota Tangerang',
            'image_icon' => 'image_icon',
            'image_homepage' => 'image_homepage',
            'created_at' => Now(),
            'updated_at' => Now(),
        ]);
    }
}
