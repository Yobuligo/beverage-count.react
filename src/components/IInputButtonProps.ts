export interface IInputButtonProps<T> {
  caption: string;
  initialValue: T;
  onClick?: (value: T) => void;
  placeholder?: string;
}
