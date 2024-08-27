<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Rules\AlphaSpace;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{

    public function update(Request $request): \Illuminate\Http\RedirectResponse
    {
        /** @var \App\Models\User */
        $user = $request->user();

        $request->validate([
            'name' => ['required', 'max:255', new AlphaSpace],
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
        ]);

        $user->fill($request->only(['name', 'email']))->save();

        return back();
    }
}
