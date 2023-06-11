import { useState } from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const inputHandleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, inputHandleChange];
};
