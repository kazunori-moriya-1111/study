<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tag>
 */
class TagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $tag_element = [
            '桐生競艇場', '戸田競艇場', '江戸川競艇場', '平和島競艇場', '多摩川競艇場', '浜名湖競艇場',
            '蒲郡競艇場', '常滑競艇場', '津競艇場', '三国競艇場', 'びわこ競艇場', '住之江競艇場',
            '尼崎競艇場', '鳴門競艇場', '丸亀競艇場', '児島競艇場', '宮島競艇場', '徳山競艇場',
            '下関競艇場', '若松競艇場', '芦屋競艇場', '福岡競艇場', '唐津競艇場', '大村競艇場',
        ];
        return [
            // テストユーザのIDを指定
            'user_id' => User::where('name', 'test_user')->first()->id,
            'name' => $this->faker->unique()->randomElement($tag_element),
            'created_at' => $this->faker->dateTimeThisMonth(),
            'updated_at' => $this->faker->dateTimeThisMonth(),
        ];
    }
}
