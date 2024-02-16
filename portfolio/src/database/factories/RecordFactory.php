<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Record>
 */
class RecordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // テストユーザのIDを指定
            'user_id' => User::where('name', 'test_user')->first()->id,
            'date' => $this->faker->dateTimeThisMonth,
            'bet' => $this->faker->randomNumber(3) * 100,
            'payout' => $this->faker->randomNumber(3) * 10,
            'memo' => $this->faker->realText(10),
            'created_at' => $this->faker->dateTimeThisMonth(),
            'updated_at' => $this->faker->dateTimeThisMonth(),
        ];
    }
}
