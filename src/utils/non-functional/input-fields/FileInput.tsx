import React from "react";

interface FileInputProps {
  givenFile: File | undefined;
  fileName: string;
  fileSize: number;
  setFile: (file: File | undefined) => void;
  isRequired: boolean;
  previousImage?: string | undefined;
}

const FileInput: React.FC<FileInputProps> = ({
  givenFile,
  fileName,
  fileSize,
  setFile,
  isRequired,
  previousImage,
}) => {
  return (
    <div className="flex items-center justify-center w-full mb-4">
      <div
        className="w-full h-44 relative border-2 bg-white border-gray-300 border-dashed rounded-lg p-8"
        id="dropzone"
      >
        <input
          type="file"
          onChange={(e) =>
            setFile(e.target.files ? e.target.files[0] : undefined)
          }
          required={isRequired}
          className="absolute inset-0 w-full h-full opacity-0 z-50"
        />
        <div className="text-center">
          <img
            className="mx-auto h-12 w-12"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            alt="Upload icon"
          />

          <h3 className="mt-2 text-sm font-medium text-gray-900">
            <label htmlFor="file-upload" className="relative cursor-pointer">
              {givenFile ? (
                <>
                  <p className="text-green-500 font-bold">{fileName}</p>
                  <p className="text-gray-500 font-bold">
                    {(fileSize / 1000).toFixed(2)} KB
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-2 text-sm text-gray-500">
                    <span>Drag and drop</span>
                    <span className="text-indigo-600"> or browse </span>
                    <span>to upload</span>
                  </p>
                  {previousImage ? (
                    <div className="text-xs text-gray-500 flex flex-col overflow-hidden">
                      {previousImage}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG, JPEG, or WEBP files are allowed
                    </p>
                  )}
                </>
              )}

              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
