import * as React from "react";

import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface ButtonBaseProps
  extends React.PropsWithoutRef<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  > {
  icon?: React.ReactElement;
  iconPosition?: "left" | "right";
  backgroundColor?: string;
  className?: string;
}

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      icon,
      iconPosition = "left",
      backgroundColor = "#568203",
      className,
      children,
      ...restProps
    },
    ref,
  ) => {
    return (
      <button
        className={cx(className, {
          iconLeft: icon && iconPosition === "left",
          iconRight: icon && iconPosition === "right",
        })}
        style={{ backgroundColor }}
        ref={ref}
        {...restProps}
      >
        {icon}
        {children}
      </button>
    );
  },
);
