<?php

namespace App\Http\Requests\Aboutme;

use Illuminate\Foundation\Http\FormRequest;

class CreateExperienceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'year' => ['required', 'string', 'max:255'],
            'job' => ['required', 'string'],
            'place' => ['required', 'string'],
            'description_short' => ['required', 'string', 'min:10'],
            'description_long' => ['required', 'string', 'min:10'],
            'image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
        ];
    }
}
