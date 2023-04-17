<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::factory(5)->hasArticles(15)->create();
        \App\Models\Article::get()->each(function ($article) {
            $article->tags()->attach(
                \App\Models\Tag::get()->random(rand(1, 3))->pluck('id')
            );
        });
    }
}
