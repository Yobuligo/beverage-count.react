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

  const convertValue = (value: string): T => {
    switch (typeof props.initialValue) {
      case "string":
        return value as T;
      case "number":
        return +value as T;
      default:
        return value as T;
    }
  };

  const initializeValue = () => {
    switch (typeof props.initialValue) {
      case "string":
        return setValue("" as T);
      case "number":
        return setValue(0 as T);
      default:
        return setValue("" as T);
    }
  };

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(convertValue(event.target.value));

  const onSubmit = () => {
    if (
      props.submitIfEmpty !== undefined &&
      props.submitIfEmpty === false &&
      !value
    ) {
      return;
    }
    
    props.onSubmit?.(value);
    if (props.clearOnClick === true) {
      initializeValue();
    }
  };

  return (
    <div>
      <input
        type={type}
        placeholder={props.placeholder}
        value={value as string}
        onChange={onChangeValue}
        onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (props.submitOnEnter === true && event.key === "Enter") {
            onSubmit();
          }
        }}
      />
      <button onClick={onSubmit}>{props.caption}</button>
    </div>
  );
}
