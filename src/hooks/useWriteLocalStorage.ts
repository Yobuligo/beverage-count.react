export const useWriteLocalStorage = <T>(key: string, value: T) => {
  const item = JSON.stringify(value);
  localStorage.setItem(key, item);
};
