export interface IInputButtonProps<T> {
  caption: string;
  clearOnClick?: boolean;
  initialValue: T;
  onSubmit?: (value: T) => void;
  placeholder?: string;
  submitIfEmpty?: boolean;
  submitOnEnter?: boolean;
}
