<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Http\Resources\ArticleSingleResource;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {

        $articles = Article::query()
            ->select('title', 'slug', 'user_id', 'teaser', 'created_at', 'id')
            ->with(['tags' => fn ($tag) => $tag->select('name', 'slug')])
            ->latest()
            ->fastPaginate();
        return inertia('Articles/Index', [
            'articles' => ArticleItemResource::collection($articles)
        ]);
    }
    public function Show(Article $article)
    {
        return inertia('Articles/Show', [
            'article' => new ArticleSingleResource($article)
        ]);
    }
}
