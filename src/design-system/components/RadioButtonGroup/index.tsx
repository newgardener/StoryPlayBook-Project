import * as React from "react";

import classNames from "classnames/bind";
import { isBoolean } from "lodash-es";

import { type GroupProps, Group } from "../Group";
import { type RadioButtonProps, RadioButton } from "../RadioButton";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface RadioButtonGroupProps {
  name: string;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
  className?: string;
}

type RadioButtonGroupContextType = {
  name: string;
  value: string;
  checkedRadioButtonValue: string;
  setRadioButtonValue: (value: string) => void;
};

const initialContextState: RadioButtonGroupContextType = {
  name: "",
  value: "",
  checkedRadioButtonValue: "",
  setRadioButtonValue: () => undefined,
};

const RadioButtonGroupContext =
  React.createContext<RadioButtonGroupContextType>(initialContextState);

export const RadioButtonGroup = React.forwardRef<HTMLDivElement, RadioButtonGroupProps>(
  ({ name, onChange, children, className, ...restProps }, ref) => {
    const [checkedRadioButtonValue, setCheckedRadioButtonValue] = React.useState("");

    const setRadioButtonValue = React.useCallback(
      (value: string) => {
        setCheckedRadioButtonValue(value);
        onChange && onChange(value);
      },
      [setCheckedRadioButtonValue, onChange],
    );

    const getRadioButtonRowGroups = () => {
      const radioButtons = React.Children.toArray(children) as React.ReactElement[];

      return radioButtons.map((radioButton: React.ReactElement, index: number) => {
        const value = radioButton.props.value ?? String(index);

        return React.cloneElement(radioButton, {
          key: radioButton.key || index,
          name: name,
          value: value,
          checkedRadioButtonValue,
          setRadioButtonValue,
        });
      });
    };

    return (
      <Group
        className={cx("radio-button-group")}
        direction="column"
        ref={ref}
        {...restProps}
      >
        {getRadioButtonRowGroups()}
      </Group>
    );
  },
);

export const RadioButtonRowGroup = React.forwardRef<
  HTMLDivElement,
  Omit<GroupProps, "direction">
>(({ children, className, ...restProps }, ref) => {
  const { name, value, checkedRadioButtonValue, setRadioButtonValue, ...rowRestProps } =
    restProps as RadioButtonGroupContextType;

  return (
    <Group className={cx("row-radio-button")} direction="row" ref={ref} {...rowRestProps}>
      <RadioButtonGroupContext.Provider
        value={{ name, value, checkedRadioButtonValue, setRadioButtonValue }}
      >
        {children}
      </RadioButtonGroupContext.Provider>
    </Group>
  );
});

export const RadioButtonInGroup = ({
  checked,
  inputProps,
  inputRef,
  onChange,
  ...restProps
}: RadioButtonProps) => {
  const { name, value, checkedRadioButtonValue, setRadioButtonValue } = React.useContext(
    RadioButtonGroupContext,
  );
  const radioButtonRef = React.useRef<HTMLInputElement | null>(null);

  const currentRadioButtonValue = radioButtonRef.current?.value || value;

  const handleOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
    },
    [],
  );

  const setInputRef = React.useCallback((node: HTMLInputElement | null) => {
    node && (radioButtonRef.current = node);
    if (inputRef) {
      if (typeof inputRef === "function") {
        inputRef(node);
      } else {
        node && ((inputRef as React.MutableRefObject<HTMLElement>).current = node);
      }
    }
  }, []);

  React.useEffect(() => {
    if (isBoolean(checked) && checked) {
      setRadioButtonValue(currentRadioButtonValue);
    }
  }, [checked, setRadioButtonValue, currentRadioButtonValue]);

  return (
    <RadioButton
      checked={currentRadioButtonValue === checkedRadioButtonValue}
      onChange={handleOnChange}
      inputProps={{ name, value, ...inputProps }}
      inputRef={setInputRef}
      {...restProps}
    />
  );
};
