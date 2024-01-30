<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    use HasFactory;

    protected $table = 'visitors';

    protected $fillable = [
        'ip_address', 'operating_system', 'visit_time', 'user_agent', 'browser', 'browser_version', 'device', 'platform', 'referer', 'visited_page', 'city', 'region', 'country', 'zipcode', 'timezone'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:m:s',
        'updated_at' => 'datetime:Y-m-d H:m:s',
    ];
}
