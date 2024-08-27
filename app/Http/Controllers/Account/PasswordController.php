<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    public function update(Request $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'current_password' => ['required', 'current_password'],
            'new_password' => ['required', 'min:6', 'max:20'],
        ]);

        /** @var \App\Models\User */
        $user = $request->user();

        $user->fill([
            'password' => Hash::make($request->new_password),
        ])->save();

        return back();
    }
}
