import * as React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface ChipProps
  extends React.PropsWithoutRef<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  > {
  active?: boolean;
  label?: string | string[];
  className?: string;
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ active = false, disabled = false, label, className, ...restProps }, ref) => {
    const getText = () => {
      if (Array.isArray(label) && label.every((v) => typeof v === "string"))
        return label.join("");
      if (typeof label === "string") return label;
      return "";
    };

    return (
      <button
        className={cx("chip", className, { active })}
        ref={ref}
        disabled={disabled}
        {...restProps}
      >
        {getText()}
      </button>
    );
  },
);
