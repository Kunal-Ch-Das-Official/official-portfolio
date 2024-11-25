import React, { Dispatch, memo, SetStateAction } from "react";
interface InputProps {
  inputContainerId: string;
  inputFieldsId: string;
  inputType: string;
  labelText: string;
  placeholderText: string;
  isRequired: boolean;
  targetCatcher: Dispatch<SetStateAction<string | number>>;
  errorMessage: string | null;
  isNotValid: boolean;
  inputColor: string;
}
const Input: React.FC<InputProps> = ({
  inputContainerId,
  inputFieldsId,
  inputType,
  labelText,
  placeholderText,
  targetCatcher,
  isRequired,
  errorMessage,
  isNotValid,
  inputColor,
}) => {
  return (
    <div id={inputContainerId} className="relative">
      <input
        type={inputType}
        id={inputFieldsId}
        required={isRequired}
        className={`block w-full text-sm h-[40px] px-4 ${inputColor}
            rounded-[8px] border  appearance-none focus:border-none
            focus:outline focus:outline-2 focus:outline-orange-500 focus:ring-0
             hover:border-brand-500-secondary- peer invalid:border-error-500 
             invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]
             ${isNotValid ? "border-red-500 border-2" : ""}`}
        placeholder={placeholderText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          targetCatcher(event.target.value)
        }
      />
      <p
        className={`${
          isNotValid ? "visible" : "hidden"
        } text-xs text-red-500 px-1`}
      >
        {errorMessage}
      </p>
      <label
        htmlFor={inputFieldsId}
        className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] 
            text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500
             duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-red-500 text-white rounded-full
              disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {labelText}
      </label>
    </div>
  );
};

export default memo(Input);
