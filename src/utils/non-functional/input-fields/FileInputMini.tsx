import React from "react";
interface FileInputMiniProps {
  getFileValue: (file: File | undefined) => void;
  isRequired: boolean;
}
const FileInputMini: React.FC<FileInputMiniProps> = ({
  getFileValue,
  isRequired,
}) => {
  return (
    <div className="w-full overflow-hidden border border-gray-300 py-4 px-2 rounded-md">
      <label className="block">
        <span className="sr-only">Choose a photo</span>
        <input
          type="file"
          className="block w-full text-sm text-gray-500
          file:me-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:text-sm file:font-semibold
          file:bg-primary-button-background file:text-white
          hover:file:bg-primary-button-background-hover
          file:disabled:opacity-50 file:disabled:pointer-events-none cursor-pointer
        "
          required={isRequired}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            getFileValue(e.target.files?.[0])
          }
        />
      </label>
    </div>
  );
};

export default FileInputMini;
