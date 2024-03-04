<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;
use App\Models\RecordTag;

class RecordTagController extends Controller
{
    //
    public function update(Request $request, $id)
    {
        $record = Record::find($id);
        $recordTagIdCollection = $record->tags->pluck('id');
        $updateTagIdArray = array_diff($request->updateTagIdArray, $recordTagIdCollection->toArray());
        $deleteTagIdArray = array_diff($recordTagIdCollection->toArray(), $request->updateTagIdArray);

        // tag削除
        foreach ($deleteTagIdArray as $deleteTagId) {
            $recordTag = RecordTag::where('record_id', $record->id)->where('tag_id', $deleteTagId);
            $recordTag->delete();
        }
        // tag更新
        foreach ($updateTagIdArray as $updateTagId) {
            RecordTag::create([
                'record_id' => $record->id,
                'tag_id' => $updateTagId,
            ]);
        }

        // 更新後のrecordを取得
        $record = Record::find($id);
        return view('manegement.show', compact('record'));
    }
}
