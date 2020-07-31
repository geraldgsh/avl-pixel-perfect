import React, { useEffect, useRef, useState } from 'react';
import { CodeInput } from 'react-rainbow-components';

function NumInput() {
  const [code, setCode] = useState();
  const codeInputRef = useRef();

  useEffect(() => {
    codeInputRef.current.focus();
  }, []);

  return (
    <CodeInput
      id="codeinput-1"
      value={code}
      onChange={setCode}
      ref={codeInputRef}
    />
  );
}

export default NumInput;
