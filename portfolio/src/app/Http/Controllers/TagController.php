<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;

class TagController extends Controller
{
    //
    public function index(Request $request)
    {

        $data = Tag::where('user_id', 1)->get();

        return view('tag.index', compact('data'));
    }
    public function store(Request $request)
    {
        $user_id = 1;
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
