<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Myprofiles extends Model
{
    use HasFactory;

    protected $fillable = [
        "fullname", "shortname", "age", "city", "country", "email", "phone"
    ];
}
