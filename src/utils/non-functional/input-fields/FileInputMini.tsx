import React from "react";
interface FileInputMiniProps {
  getFileValue: (file: File | undefined) => void;
  isRequired: boolean;
  fieldlabel: string;
  defaultValue: string | undefined;
  fileInput: File | undefined;
}
const FileInputMini: React.FC<FileInputMiniProps> = ({
  getFileValue,
  isRequired,
  fieldlabel,
  defaultValue,
  fileInput,
}) => {
  return (
    <div className="w-full">
      <label className="block">
        <p className=" mb-2 mt-1 text-sm font-medium">{fieldlabel}</p>
        <div
          className="cursor-pointer overflow-hidden
           border border-gray-300 py-4 px-2 rounded-md overflow-x-hidden"
        >
          <input
            type="file"
            className="block w-full text-sm text-gray-500
          file:me-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:text-sm file:font-semibold
          file:bg-primary-button-background file:text-white
          hover:file:bg-primary-button-background-hover
          file:disabled:opacity-50 file:disabled:pointer-events-none "
            required={isRequired}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              getFileValue(e.target.files?.[0])
            }
          />
          {fileInput ? (
            ""
          ) : (
            <p
              className={`${
                defaultValue ? "inline-flex items-center" : "hidden"
              } pt-4 text-sm  text-green-500 font-medium`}
            >
              {defaultValue}
            </p>
          )}
        </div>
      </label>
    </div>
  );
};

export default FileInputMini;
