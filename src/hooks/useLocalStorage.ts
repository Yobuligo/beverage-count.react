import { useCallback, useState } from "react";
import { readLocalStorage } from "../utils/localStorage/readLocalStorage";
import { writeLocalStorage } from "../utils/localStorage/writeLocalStorage";

export const useLocalStorage = <T>(key: string, fallback: T) => {
  const [value, setValue] = useState(
    readLocalStorage(key) ?? writeLocalStorage(key, fallback)
  );

  const updateValue = useCallback(
    (newValue: T) => {
      setValue(newValue);
      const item = JSON.stringify(value);
      localStorage.setItem(key, item);
    },
    [key, value]
  );

  return [value, updateValue];
};
