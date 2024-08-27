<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class CardController extends Controller
{
    public function index(): \Inertia\Response
    {
        $cards = fn() => Card::with(['images'])
            ->where('user_id', auth()->guard()->id())
            ->latest()
            ->get();

        return inertia('Cards/Index', [
            'cards' => $cards,
        ]);
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'title' => ['required', 'max:255'],
            'content' => ['nullable'],
        ]);

        (new Card($request->only(['title', 'content'])))->save();

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

        return back();
    }
}
