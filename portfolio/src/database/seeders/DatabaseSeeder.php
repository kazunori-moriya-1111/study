<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // ユーザデータ作成
        $this->call([
            UserSeeder::class
        ]);

        // タグデータ（ダミー）作成
        \App\Models\Tag::factory(10)->create();

        // レコードデータ（ダミー）作成
        \App\Models\Record::factory(10)->create();

        // レコードタグデータ（ダミー）作成
        \App\Models\RecordTag::factory()->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
