'use client'
import React, { useState, useEffect } from 'react';
import beautify from 'js-beautify';
import { Controlled as CodeMirror, IControlledCodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

interface CodeMockupProps {
  minifiedCode: string;
}

const CodeMockup: React.FC<CodeMockupProps> = ({ minifiedCode }) => {
  const [formattedCode, setFormattedCode] = useState<string>('');

  useEffect(() => {
    // Format the minified code
    const formatted = beautify.js(minifiedCode);
    setFormattedCode(formatted);
  }, [minifiedCode]);

  return (
    <CodeMirror
      value={formattedCode}
      options={{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
        readOnly: true,
      }}
      onBeforeChange={(
        editor,
        data,
        value
      ) => {
        // This is required by the Controlled component but we don't need to handle changes
      }}
      onChange={(editor, data, value) => {
        // This is required by the Controlled component but we don't need to handle changes
      }}
    />
  );
};

export default CodeMockup;
