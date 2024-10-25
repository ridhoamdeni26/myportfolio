<?php

namespace App\Http\Requests\Portfolio;

use Illuminate\Foundation\Http\FormRequest;

class PortfolioCreateRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:255'],
            'client_name' => ['required', 'string', 'min:5'],
            'category' => ['required', 'string'],
            'selectedDate' => ['required', 'date'],
            'description' => ['required', 'string', 'min:10'],
            'link' => ['required', 'url'],
            'image_thumbnail' => ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'image_description' => ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'image_description2' => ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'image_description3' => ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'icon1' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
            'icon2' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
            'icon3' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
            'icon4' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
        ];
    }
}
