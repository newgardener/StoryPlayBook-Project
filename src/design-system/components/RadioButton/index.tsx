import * as React from "react";
import classNames from "classnames/bind";
import { isBoolean } from "lodash-es";

import { isStringValue } from "../../assets/utils";
import { type InputElementProps, InputBase } from "../InputElement";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface RadioButtonProps
  extends Omit<
    React.PropsWithoutRef<
      React.DetailedHTMLProps<
        React.LabelHTMLAttributes<HTMLLabelElement>,
        HTMLLabelElement
      >
    >,
    "onChange"
  > {
  checked?: boolean;
  disabled?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  inputProps?: InputElementProps;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: string;
  className?: string;
}

export const RadioButton = React.forwardRef<HTMLLabelElement, RadioButtonProps>(
  (
    {
      checked,
      disabled = false,
      inputRef,
      inputProps,
      onChange,
      children,
      className,
      ...restProps
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = React.useState(
      (isBoolean(checked) && checked) || false,
    );

    const handleOnChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked ?? false);
        onChange && onChange(event);
      },
      [setIsChecked, onChange],
    );

    React.useEffect(() => {
      if (isBoolean(checked)) {
        setIsChecked(checked);
      }
    }, [checked]);

    return (
      <label className={cx("radio-button", { disabled })} ref={ref} {...restProps}>
        <InputBase
          type="radio"
          disabled={disabled}
          onChange={handleOnChange}
          checked={isChecked}
          ref={inputRef}
          {...inputProps}
        />
        {isStringValue(children) && (
          <span className={cx("radio-button-label")}>{children}</span>
        )}
      </label>
    );
  },
);
