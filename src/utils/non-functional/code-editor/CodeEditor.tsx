import React from "react";
import Editor from "@monaco-editor/react";

type CodeEditorProps = {
  initialValue: string | undefined;
  onChange: (value: string | undefined) => void;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  return (
    <div className="h-full w-full mt-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        Add require code
      </label>
      <Editor
        height={"300px"}
        defaultLanguage="typescript"
        defaultValue={initialValue}
        onChange={onChange}
        theme="visual-studio" // Dark theme; you can also use "light" or customize your theme
        options={{
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
