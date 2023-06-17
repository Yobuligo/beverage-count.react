export const formatDate = (date: string): string => {
  return date.toString().split("T").at(0)!;
};
