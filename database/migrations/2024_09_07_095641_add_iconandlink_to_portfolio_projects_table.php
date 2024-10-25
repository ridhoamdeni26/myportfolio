<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('portfolio_projects', function (Blueprint $table) {
            $table->string('link')->after('client_name');
            $table->string('icon1')->after('description');
            $table->string('icon2')->after('icon1');
            $table->string('icon3')->after('icon2');
            $table->string('icon4')->after('icon3');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('portfolio_projects', function (Blueprint $table) {
            $table->dropColumn('link');
            $table->dropColumn('icon1');
            $table->dropColumn('icon2');
            $table->dropColumn('icon3');
            $table->dropColumn('icon4');
        });
    }
};
