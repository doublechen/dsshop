<?php

namespace App\Http\Requests\v1;

use App\Http\Requests\Request;

class SubmitResourceGroupRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        switch ($this->method()) {
            case 'POST':
                return true;
            case 'GET':
            default: {
                    return false;
                }
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $request = Request::all();
        switch ($this->method()) {
            case 'POST':    //create
                if (Request::has('id')) {   //更新
                    return [
                        'name' => 'required|unique:resource_groups,name,' . $request['id'] . '|string|max:20',
                    ];
                } else {
                    return [
                        'name' => 'required|unique:resource_groups|string|max:20',
                    ];
                }
            case 'GET':
            default: {
                    return [];
                }
        }
    }

    public function messages()
    {
        return [
            'name.required' => __('hint.error.not_null', ['attribute' => __('requests.resource_group.name')]),
            'name.unique' => __('hint.error.exist', ['attribute' => __('requests.resource_group.name')]),
            'name.max' => __('hint.error.exceed', ['attribute' => __('requests.resource_group.name'), 'place' => 20]),
        ];
    }
}