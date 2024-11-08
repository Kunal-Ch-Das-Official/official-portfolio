import React, { useState } from "react";
import showHidePasswordHandler from "../../functional/showHidePassword";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
interface PasswordInputProps {
  inputId: string;
  passwordLabel: string;
  inputValue: (value: string) => void;
  validationError: boolean | undefined;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  inputId,
  passwordLabel,
  inputValue,
  validationError,
}) => {
  const [eyeButton, setEyeButton] = useState<boolean>(false);

  const handlePasswordOpenColse = () => {
    showHidePasswordHandler(inputId);
    setEyeButton((prev) => !prev);
  };
  return (
    <div>
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {passwordLabel}
      </label>

      <div className="relative flex items-center">
        <input
          type="password"
          name={inputId}
          id={inputId}
          placeholder="••••••••••••••"
          className={`bg-white border text-gray-900
           rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
           ${validationError === true ? "border-red-600" : "border-gray-300"}`}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            inputValue(e.target.value)
          }
        />
        {eyeButton === true ? (
          <IoEyeOffSharp
            className="text-xl text-gray-600 absolute right-2 cursor-pointer"
            onClick={handlePasswordOpenColse}
          />
        ) : (
          <IoEyeSharp
            className="text-xl text-gray-600 absolute right-2 cursor-pointer"
            onClick={handlePasswordOpenColse}
          />
        )}
      </div>
      {validationError && (
        <p className="ml-2 text-red-500 font-sm text-xs my-0 py-0">
          Please check the password fields
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
