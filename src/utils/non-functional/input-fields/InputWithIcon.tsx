import React, { ReactNode } from "react";

interface InputWithIconProps {
  inputLabel: string;
  placeholderText: string | undefined;
  corespIcon: ReactNode;
  getFieldValue: (value: string) => void;
  isRequired: boolean;
  fieldId: string;
  defaultText: string | undefined;
}
const InputWithIcon: React.FC<InputWithIconProps> = ({
  inputLabel,
  placeholderText,
  corespIcon,
  getFieldValue,
  isRequired,
  fieldId,
  defaultText,
}) => {
  return (
    <>
      <label
        htmlFor={fieldId}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {inputLabel}
      </label>
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
          {corespIcon}
        </span>
        <input
          type="text"
          id={fieldId}
          defaultValue={defaultText}
          className="rounded-none rounded-e-lg bg-white border
           text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
          placeholder={placeholderText}
          required={isRequired}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            getFieldValue(e.target.value)
          }
        />
      </div>
    </>
  );
};

export default InputWithIcon;
