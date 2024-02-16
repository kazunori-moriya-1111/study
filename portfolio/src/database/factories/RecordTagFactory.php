<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Record;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class RecordTagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $user_id = User::where('name', 'test_user')->first()->id;
        return [
            'record_id' => Record::where('user_id', $user_id)->first()->id,
            'tag_id' => Tag::where('user_id', $user_id)->first()->id,
            'created_at' => $this->faker->dateTimeThisMonth(),
            'updated_at' => $this->faker->dateTimeThisMonth(),
        ];
    }
}
