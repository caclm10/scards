<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Session;

class InertiaHelper
{
    public static function flash(array $data)
    {
        Session::flash('inertia', $data);
    }
}
