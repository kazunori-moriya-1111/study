<div>
    <button wire:click="openModal" type="button" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        タグを編集する
    </button>

    @if($showModal)
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        タグ登録
                    </h3>
                    <form method="post" action="{{ route('record-tag.update', ['id' => $record->id]) }}">
                        @csrf
                        @foreach($tags as $tag)
                        <div class="flex items-center mb-4">
                            <input type="checkbox" name="updateTagIdArray[]" value="{{ $tag->id }}" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" {{ $recordTagIdCollection->contains($tag->id) ? 'checked' : ''}}>
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $tag->name }}</label>
                        </div>
                        @endforeach
                        <br>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">更新する</button>
                    </form>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button wire:click="closeModal()" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700">
                        閉じる
                    </button>
                </div>
            </div>
        </div>
    </div>
    @endif
</div>