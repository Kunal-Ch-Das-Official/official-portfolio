import React from "react";

interface TextInputProps {
  inputLabel: string;
  defaultText: string | undefined;
  textValue: (value: string) => void;
  placeHolderText: string | undefined;
  isRequired: boolean;
  fieldId: string;
}

const TextInput: React.FC<TextInputProps> = ({
  inputLabel,
  defaultText,
  textValue,
  placeHolderText,
  isRequired,
  fieldId,
}) => {
  return (
    <div className="my-2">
      <label
        htmlFor={fieldId}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {inputLabel}
      </label>
      <input
        type="text"
        defaultValue={defaultText}
        name={fieldId}
        id={fieldId}
        className="bg-white border
       border-gray-300 text-gray-900 rounded-lg text-sm focus:ring-primary-600 focus:border-primary-600 
       block w-full p-2"
        placeholder={placeHolderText}
        required={isRequired}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          textValue(e.target.value)
        }
      />
    </div>
  );
};

export default TextInput;
