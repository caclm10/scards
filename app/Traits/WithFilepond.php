<?php

namespace App\Traits;

use Illuminate\Http\Request;

trait WithFilepond
{
    public function __construct(
        protected Request $request
    ) {}

    public function processFileUpload(string $path, string $disk = 'public'): string|false
    {
        $request = $this->request;

        $files = $request->allFiles();

        if (empty($files)) {
            abort(422, 'No files were uploaded.');
        }

        if (count($files) > 1) {
            abort(422, 'Only 1 file can be uploaded at a time.');
        }

        $requestKey = array_key_first($files);

        /** @var \Illuminate\Http\UploadedFile */
        $file = is_array($request->input($requestKey))
            ? $request->file($requestKey)[0]
            : $request->file($requestKey);

        return $file->store($path, $disk);
    }
}
