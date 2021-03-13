<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => '/api', 'as' => 'api.'], function () use ($router) {
    $router->group(['prefix' => '/incidents', 'as' => 'incidents.'], function () use ($router) {
        $router->get('/', 'IncidentController@all');
        $router->post('/', 'IncidentController@store');
        $router->get('/{id}', 'IncidentController@get');
        $router->put('/{id}', 'IncidentController@update');
        $router->delete('/{id}', 'IncidentController@delete');
    });
});
