<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;
use App\Models\User;

class TagController extends Controller
{
    //
    public function index(Request $request)
    {
        $user_id = User::select('id')->where('name', 'test_user')->first()->id;
        $data = Tag::where('user_id', $user_id)->get();

        return view('tag.index', compact('data'));
    }
    public function store(Request $request)
    {
        $user_id = User::select('id')->where('name', 'test_user')->first()->id;
        Tag::create([
            'user_id' => $user_id,
            'name' => $request->name,
        ]);

        return to_route('tag.index');
    }

    public function update(Request $request, $id)
    {
        $tag = Tag::find($id);
        $tag->name = $request->name;
        $tag->save();

        return to_route('tag.index');
    }

    public function destroy($id)
    {
        $record = Tag::find($id);
        $record->delete();

        return to_route('tag.index');
    }
}
