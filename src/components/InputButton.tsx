import { useState } from "react";
import { IInputButtonProps } from "./IInputButtonProps";

export function InputButton<T>(props: IInputButtonProps<T>) {
  const [value, setValue] = useState(props.initialValue);

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value as T);

  const onClick = () => props.onClick?.(value);

  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        value={value as string}
        onChange={onChangeValue}
      />
      <button onClick={onClick}>{props.caption}</button>
    </>
  );
}
