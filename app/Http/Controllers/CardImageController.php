<?php

namespace App\Http\Controllers;

use App\Http\Resources\CardImageResource;
use App\Models\Card;
use App\Models\CardImage;
use App\Traits\WithFilepond;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;

class CardImageController extends Controller
{
    use WithFilepond;

    public function index(Card $card): \Illuminate\Http\JsonResponse
    {
        Gate::authorize('view', $card);

        return response()->json([
            'images' => CardImageResource::collection($card->images)
        ]);
    }

    public function store(Card $card): \Illuminate\Http\JsonResponse
    {
        Gate::authorize('update', $card);

        $path = $this->processFileUpload(
            path: 'images/cards/' . $card->id,
        );

        $card->images()->create(['path' => $path]);

        return response()->json();
    }


    public function destroy(Card $card, CardImage $image): \Illuminate\Http\JsonResponse
    {
        Gate::authorize('delete', $card);

        $path = $image->path;

        $image->delete();

        Storage::disk('public')->delete($path);

        return response()->json();
    }
}
