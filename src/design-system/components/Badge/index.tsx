import * as React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface BadgeProps
  extends React.PropsWithoutRef<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  > {
  type: "count" | "label";
  count?: number;
  label?: string | string[];
  labelColor?: "red" | "blue" | "gray";
  size?: "small" | "large";
  visible?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const LABEL_MAX_LENGTH = 10;

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    { type, count, label, labelColor, size, visible = true, className, children },
    ref,
  ) => {
    const trimCount = React.useCallback((count: number | undefined) => {
      if (!count) return String(0);
      return count > 99 ? "99+" : String(count);
    }, []);

    const trimLabel = React.useCallback((label: string | string[] | undefined) => {
      if (!label) return "";
      const labelToShow = Array.isArray(label) ? label.join("") : label;
      return labelToShow.length > LABEL_MAX_LENGTH
        ? labelToShow.slice(0, LABEL_MAX_LENGTH) + "..."
        : labelToShow;
    }, []);

    return (
      <div className={cx("badge", className)} ref={ref}>
        {type === "count" ? children : null}
        {type === "count" && children ? (
          <span className={cx("type-count", labelColor, { visible })}>
            {trimCount(count)}
          </span>
        ) : type === "label" && label ? (
          <span className={cx("type-label", labelColor, size, { visible })}>
            {trimLabel(label)}
          </span>
        ) : null}
      </div>
    );
  },
);
