import * as React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface InputBaseProps
  extends React.PropsWithoutRef<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  > {
  className?: string;
}

export const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, ...restProps }, ref) => {
    return (
      <input className={cx("input-element", className)} ref={ref} {...restProps}></input>
    );
  },
);

export interface InputElementProps extends InputBaseProps {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputElement = React.forwardRef<HTMLInputElement, InputElementProps>(
  ({ value = "", placeholder = "", onChange, ...restProps }, ref) => {
    const [inputValue, setInputValue] = React.useState<string>(value);
    const handleOnChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value ?? "");
        onChange && onChange(event);
      },
      [inputValue, onChange],
    );

    React.useEffect(() => {
      setInputValue(value);
    }, [value]);

    return (
      <InputBase
        value={inputValue}
        placeholder={placeholder}
        onChange={handleOnChange}
        ref={ref}
        {...restProps}
      />
    );
  },
);
