import * as React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface TypographyProps
  extends React.PropsWithoutRef<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  > {
  color?: string;
  weight?: "bold" | "regular";
  fontSize?: number;
  lineHeight?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "div" | "span" | "strong" | "b"; // p tag is a default tag
  children?: string;
  className?: string;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      color = "#191c20",
      weight = "regular",
      fontSize = 14,
      lineHeight = 20,
      tag,
      children,
      className,
      ...restProps
    },
    ref,
  ) => {
    const elementType = React.useMemo(() => {
      return typeof children === "object" ? "div" : tag ? tag : "p";
    }, [children, tag]);

    if (typeof children === "string") {
      return React.createElement(
        elementType,
        {
          className: cx("typography", elementType, weight, className),
          style: {
            color,
            fontSize: `${fontSize}px`,
            lineHeight: `${lineHeight}px`,
          },
          ref,
          ...restProps,
        },
        children,
      );
    }
    return null;
  },
);
