import * as React from "react";

import classNames from "classnames/bind";

import { isStringValue } from "../../assets/utils";
import { DotLoading } from "../DotLoading";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import { BUTTON_SIZE } from "./types";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];

export interface ButtonProps extends ButtonBaseProps {
  size: ButtonSize;
  backgroundColor?: string;
  textColor?: "white" | "black";
  textBolded?: boolean;
  isLoading?: boolean;
  children?: string | string[];
}

export const Button = ({
  size,
  backgroundColor,
  textColor = "white",
  textBolded = true,
  isLoading = false,
  disabled = false,
  icon,
  children,
  className,
  ...restProps
}: ButtonProps) => {
  const [isIconOnly, setIconOnly] = React.useState<boolean>(false);
  const textElement = React.useRef<HTMLParagraphElement>(null);
  const buttonElement = React.useRef<HTMLButtonElement>(null);

  const getButtonContent = React.useCallback((): React.ReactElement | null => {
    const textContent =
      Array.isArray(children) && children.every((v) => typeof v === "string")
        ? children.join("")
        : typeof children === "string"
        ? children
        : null;

    if (textContent) {
      return (
        <p
          className={cx("button-text")}
          ref={textElement}
          style={{ whiteSpace: "nowrap" }}
        >
          {textContent}
        </p>
      );
    }
    return null;
  }, [children]);

  React.useEffect(() => {
    if (!isStringValue(children) && icon) {
      setIconOnly(true);
    }
  }, [children, icon]);

  return (
    <ButtonBase
      className={cx("custom-button", size, className, {
        loading: isLoading,
        onlyIcon: isIconOnly,
        textWhite: textColor === "white",
        textBolded,
      })}
      backgroundColor={backgroundColor}
      icon={icon ?? undefined}
      disabled={disabled}
      ref={buttonElement}
      {...restProps}
    >
      {getButtonContent()}
      {isLoading && <DotLoading />}
    </ButtonBase>
  );
};
