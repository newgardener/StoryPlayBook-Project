import * as React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface FlexLayoutProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?: "start" | "center" | "end" | "between" | "around";
  alignItems?: "start" | "center" | "end" | "stretch";
  className?: string;
  children?: React.ReactNode;
}

export const FlexLayout = ({
  direction,
  justifyContent,
  alignItems,
  className,
  children,
}: FlexLayoutProps) => {
  return (
    <div
      className={cx(
        "flex-layout",
        direction,
        `justify-${justifyContent}`,
        `align-${alignItems}`,
        className,
      )}
    >
      {children}
    </div>
  );
};
