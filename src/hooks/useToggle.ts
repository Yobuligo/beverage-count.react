import { useState } from "react";

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggle = (newValue?: boolean) => {
    if (newValue) {
      setValue(newValue);
    } else {
      setValue((previous) => !previous);
    }
  };

  return [value, toggle];
};
