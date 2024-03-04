<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('record_tag', function (Blueprint $table) {
            $table->foreignId('record_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();;
            $table->foreignId('tag_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();;
            $table->timestamps();
            $table->primary(['record_id', 'tag_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('record_tag');
    }
};
