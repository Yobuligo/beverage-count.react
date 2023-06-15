import { useMemo, useState } from "react";
import { IInputButtonProps } from "./IInputButtonProps";

export function InputButton<T>(props: IInputButtonProps<T>) {
  const [value, setValue] = useState(props.initialValue);

  const type = useMemo((): React.HTMLInputTypeAttribute => {
    switch (typeof props.initialValue) {
      case "string":
        return "text";
      case "number":
        return "number";
      case "object": {
        if (props.initialValue instanceof Date) {
          return "date";
        }
        return "text";
      }
      default:
        return "text";
    }
  }, [props.initialValue]);

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value as T);

  const onClick = () => props.onClick?.(value);

  return (
    <>
      <input
        type={type}
        placeholder={props.placeholder}
        value={value as string}
        onChange={onChangeValue}
      />
      <button onClick={onClick}>{props.caption}</button>
    </>
  );
}
