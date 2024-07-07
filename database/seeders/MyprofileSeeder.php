<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MyprofileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('myprofiles')->insert([
            'fullname' => 'Ridho Amdeni',
            'shortname' => 'Ridho',
            'age' => '29',
            'city' => 'Kota Tangerang',
            'country' => 'indonesia',
            'phone' => '081365200863',
            'email' => 'secretridho26@gmail.com',
            'created_at' => Now(),
            'updated_at' => Now(),
        ]);
    }
}
