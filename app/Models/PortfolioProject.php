<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PortfolioProject extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'client_name',
        'image_thumbnail',
        'image_description1',
        'image_description2',
        'image_description3',
        'category',
        'date',
        'description',
        'icon1',
        'icon2',
        'icon3',
        'icon4',
        'link'
    ];
}
