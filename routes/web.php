<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return inertia('About/About'); // Inertia::render('About/About'); folder name -> About, file name -> About
});
