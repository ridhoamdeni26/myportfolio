<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnalyticsLogin extends Model
{
    use HasFactory;

    protected $table = 'login_analytics';

    protected $fillable = [
        'user_id', 'login_time', 'logout_time', 'operating_system', 'ip_address', 'user_agent', 'browser', 'browser_version', 'device', 'platform',
        'city', 'region', 'country', 'zipcode', 'timezone', 'status'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:m:s',
        'updated_at' => 'datetime:Y-m-d H:m:s',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
