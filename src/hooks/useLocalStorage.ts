import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, fallback: T) => {
  const [value, setValue] = useState(fallback);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      setValue(JSON.parse(item));
    }
  }, [key]);

  const updateValue = useCallback((newValue: T) => {
    setValue(newValue);
    const item = JSON.stringify(newValue);
    localStorage.setItem(key, item);
  }, [key]);

  return [value, updateValue];
};
