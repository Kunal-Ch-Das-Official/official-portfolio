import { Editor } from "primereact/editor";
import React from "react";

interface TextAreaProps {
  editorLabel: string;
  eventValue: string | undefined;
  eventHandler: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  editorLabel,
  eventValue,
  eventHandler,
}) => {
  return (
    <div className="mt-2">
      <label
        htmlFor="description"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {editorLabel}
      </label>
      <div className="card">
        <Editor
          className="bg-white"
          value={eventValue}
          onTextChange={(e) => eventHandler(e.textValue as string)}
          style={{ height: "220px" }}
        />
      </div>
    </div>
  );
};

export default TextArea;
