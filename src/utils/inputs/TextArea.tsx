import React, { Dispatch, memo, SetStateAction } from "react";

interface TextAreaProps {
  areaContainerId: string;
  areaId: string;
  placeholderText: string;
  labelText: string;
  isRequired: boolean;
  valueCatcher: Dispatch<SetStateAction<string>>;
  textareaColor: string;
}
const TextArea: React.FC<TextAreaProps> = ({
  areaContainerId,
  areaId,
  placeholderText,
  labelText,
  valueCatcher,
  isRequired,
  textareaColor,
}) => {
  return (
    <div id={areaContainerId} className="relative">
      <textarea
        id={areaId}
        className={`block w-full text-sm h-[150px] px-4  pt-4 ${textareaColor}
       rounded-[8px] border appearance-none 
       focus:border-transparent focus:outline focus:outline-2 focus:outline-orange-500
        focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500
         invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]`}
        placeholder={placeholderText}
        required={isRequired}
        onChange={(event) => valueCatcher(event.target.value)}
      />
      <label
        htmlFor={areaId}
        className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px]
       leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 
       focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2
        z-10 origin-[0] bg-red-500 text-white rounded-full disabled:bg-gray-50-background- px-2 peer-focus:px-2
         peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
         peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {labelText}
      </label>
    </div>
  );
};

export default memo(TextArea);
