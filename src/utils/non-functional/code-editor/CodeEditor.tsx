import React from "react";
import Editor from "@monaco-editor/react";

type CodeEditorProps = {
  initialValue: string | undefined;
  onChange: (value: string | undefined) => void | null;
  readOnlyOption: boolean;
  themeColor: string;
  caption: string;
};

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialValue,
  readOnlyOption,
  onChange,
  themeColor,
  caption,
}) => {
  return (
    <div className="h-full w-full mt-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {caption}
      </label>
      <Editor
        height={"300px"}
        defaultLanguage="typescript"
        value={initialValue}
        onChange={onChange}
        theme={themeColor} // Dark theme; you can also use "light" or customize your theme
        options={{
          readOnly: readOnlyOption,
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
        className="border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default CodeEditor;
