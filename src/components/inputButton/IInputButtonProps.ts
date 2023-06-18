export interface IInputButtonProps<T> {
  caption: string;
  className?: string;
  clearOnClick?: boolean;
  initialValue: T;
  onSubmit?: (value: T) => void;
  placeholder?: string;
  submitIfEmpty?: boolean;
  submitOnEnter?: boolean;
  width?: string;
}
