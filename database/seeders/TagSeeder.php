<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Laravel', 'slug' => str($name)->slug()],
            ['name' => $name = 'PHP', 'slug' => str($name)->slug()],
            ['name' => $name = 'Html', 'slug' => str($name)->slug()],
            ['name' => $name = 'CSS', 'slug' => str($name)->slug()],
            ['name' => $name = 'Tailwind CSS', 'slug' => str($name)->slug()],
            ['name' => $name = 'Bootstrap', 'slug' => str($name)->slug()],
            ['name' => $name = 'Javascript', 'slug' => str($name)->slug()],
            ['name' => $name = 'React.js', 'slug' => str($name)->slug()],
        ])->each(fn ($category) => \App\Models\Tag::create($category));
    }
}
