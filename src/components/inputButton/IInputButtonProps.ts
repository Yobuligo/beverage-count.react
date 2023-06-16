export interface IInputButtonProps<T> {
  caption: string;
  clearOnClick?: boolean;
  initialValue: T;
  onClick?: (value: T) => void;
  placeholder?: string;
}
