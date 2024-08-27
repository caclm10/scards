<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function __invoke(): \Inertia\Response
    {
        return inertia('Account/Index');
    }
}
