import React from "react";
interface CommandInputProps {
  setValue: (value: string) => void;
  isRequired: boolean;
  inputId: string;
  inputLabel: string;
}
const CommandInput: React.FC<CommandInputProps> = ({
  setValue,
  isRequired,
  inputId,
  inputLabel,
}) => {
  return (
    <>
      <label
        htmlFor={inputId}
        className="block mt-4 mb-1 text-sm font-medium text-gray-900"
      >
        {inputLabel}
      </label>
      <div className="flex items-center bg-white p-2 gap-1.5 border border-gray-300 rounded-lg">
        <p className="text-sm text-black">
          <span className="text-[#dd00ff]">user</span>
          <span className="text-[#009985]">@admin/console</span>:
          <span className="text-[#622eff]">~</span>$
        </p>
        <input
          className="bg-transparent w-full border-none outline-none text-black placeholder:text-gray-600"
          placeholder="sudo -add command"
          required={isRequired}
          id={inputId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          type="text"
        />
      </div>
    </>
  );
};

export default CommandInput;
