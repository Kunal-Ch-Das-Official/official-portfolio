import React from "react";

interface NumberInputProps {
  inputLabel: string;
  defaultNumber: number | undefined;
  numberValue: (value: number) => void;
  placeHolderText: string | undefined;
  isRequired: boolean;
  fieldId: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  inputLabel,
  defaultNumber,
  numberValue,
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
        type="number"
        defaultValue={defaultNumber}
        name={fieldId}
        id={fieldId}
        className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder={placeHolderText}
        required={isRequired}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          numberValue(Number(e.target.value))
        }
      />
    </div>
  );
};

export default NumberInput;
