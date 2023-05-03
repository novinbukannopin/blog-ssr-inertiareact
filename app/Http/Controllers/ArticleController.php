<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Http\Resources\ArticleItemResource;
use App\Http\Resources\ArticleSingleResource;
use App\Models\Article;
use Illuminate\Support\Str;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

    public $tags;
    public $categories;

    public function __construct()
    {
        $this->middleware('auth')->except('Show', 'index');
        $this->tags = Tag::select('id', 'name')->get();
        $this->categories = Category::select('id', 'name')->get();
    }

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

    public function store(Request $request)
    {
        $article = $request->user()->articles()->create([
            'title' => $title = $request->title,
            'slug' => str($title)->slug(),
            'teaser' => $request->teaser,
            'category_id' => $request->category_id['id'],
            'body' => $request->body
        ]);

        $article->tags()->attach($request->tags);
        return to_route('articles.show', $article);
    }

    public function create()
    {
        return Inertia('Articles/Create', [
            'tags' => $this->tags,
            'categories' => $this->categories
        ]);
    }
}
