import React from "react";

interface InputProps {
  isRequired: boolean;
  inputLabel: string;
  defaultEmail?: string;
  emailValue: (value: string) => void;
  emailValidationError: boolean;
  placeHolderText?: string;
  fieldId: string;
}

const EmailInput: React.FC<InputProps> = ({
  inputLabel,
  defaultEmail,
  emailValue,
  emailValidationError,
  placeHolderText,
  isRequired,
  fieldId,
}) => {
  return (
    <div>
      <label
        htmlFor={fieldId}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {inputLabel}
      </label>
      <input
        type="email"
        defaultValue={defaultEmail}
        name={fieldId}
        id={fieldId}
        className={`bg-white border lowercase ${
          emailValidationError ? "border-red-500" : "border-gray-300"
        } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 
        block w-full p-2.5`}
        placeholder={placeHolderText}
        required={isRequired}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          emailValue(e.target.value)
        }
      />
      {emailValidationError && (
        <p className="ml-2 text-red-500 font-sm text-xs my-0 py-0">
          Please provide a valid email
        </p>
      )}
    </div>
  );
};

export default EmailInput;
