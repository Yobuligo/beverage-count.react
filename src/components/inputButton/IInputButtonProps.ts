export interface IInputButtonProps<T> {
  caption: string;
  clearOnClick?: boolean;
  initialValue: T;
  triggerOnClickOnEnter?: boolean
  onClick?: (value: T) => void;
  placeholder?: string;
}
