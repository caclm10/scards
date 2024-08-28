<?php

namespace App\Http\Controllers;

use App\Helpers\InertiaHelper;
use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;

class CardController extends Controller
{
    public function index(): \Inertia\Response
    {
        $cards = fn() => Card::query()
            ->where('user_id', auth()->guard()->id())
            ->latest()
            ->get();

        return inertia('Cards/Index', [
            'cards' => $cards,
        ]);
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        /** @var \App\Models\User */
        $user = $request->user();

        $card = $user->cards()->create(['title' => 'Untitled']);

        InertiaHelper::flash(['new_card_id' => $card->id]);

        return back();
    }

    public function update(Request $request, Card $card): \Illuminate\Http\RedirectResponse
    {
        Gate::authorize('update', $card);

        $request->validate([
            'title' => ['required', 'max:255'],
            'content' => ['nullable'],
        ]);

        $card->fill($request->only(['title', 'content']))->save();

        return back();
    }

    public function destroy(Card $card): \Illuminate\Http\RedirectResponse
    {
        Gate::authorize('delete', $card);

        $card->delete();

        Storage::disk('public')->deleteDirectory('images/cards/' . $card->id);

        return back();
    }
}
