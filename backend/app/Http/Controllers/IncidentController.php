<?php
    namespace App\Http\Controllers;

    use App\Traits\RestActions;

    class IncidentController extends Controller {
        private $_model = "App\\Models\\Incident";
        use RestActions;
    }
