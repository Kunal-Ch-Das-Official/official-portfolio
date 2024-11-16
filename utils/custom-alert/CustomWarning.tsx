import React from "react";
import { TiWarning } from "react-icons/ti";

interface WarningProps {
  warningHeading: string;
  warningMessage: string;
  closeFunction: () => void;
}

const CustomWarning: React.FC<WarningProps> = ({
  warningHeading,
  warningMessage,
  closeFunction,
}) => {
  return (
    <main className="border-2 border-red-500 w-1/2 h-full relative">
      <div className="ml-40">
        <div className="flex flex-col items-start">
          <TiWarning className="text-3xl text-red-500" />

          <div>
            <h4 className="font-bold text-base mb-2 text-red-500">
              {warningHeading}
            </h4>
            <p className="block sm:inline text-sm text-red-500">
              {warningMessage}
            </p>
          </div>
        </div>

        <div className="text-right mt-6">
          <button
            type="button"
            onClick={closeFunction}
            className="text-blue-600"
          >
            Got It
          </button>
        </div>
      </div>
    </main>
  );
};

export default CustomWarning;
