export const readLocalStorage = <T>(key: string): T | undefined => {
  const item = localStorage.getItem(key);
  if (item) {
    JSON.parse(item);
  }
  return undefined;
};
