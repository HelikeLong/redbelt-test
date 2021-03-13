<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property string $document
 * @property string $deleted_at
 * @property string $created_at
 * @property string $updated_at
 */
class Incident extends Model
{
    use SoftDeletes;

    /**
     * @var array
     */
    protected $fillable = ['title', 'description', 'critical_level', 'type', 'active', 'deleted_at', 'created_at', 'updated_at'];
    protected $dates = ['deleted_at', 'created_at', 'updated_at'];

    public static $rules = [
        "title" => "required|string|max:150",
        "description" => "required|string",
        "critical_level" => "required|string|in:high,medium,low",
        "type" => "required|string|in:alarm,fire,others",
        "active" => "required|string|in:true,false"
    ];
}
