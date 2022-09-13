import * as React from "react";

import classNames from "classnames/bind";

import { IconColorTheme } from "./types";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface SvgIconProps
  extends React.PropsWithoutRef<
    React.DetailedHTMLProps<React.SVGAttributes<SVGSVGElement>, SVGSVGElement>
  > {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: number;
  style?: React.CSSProperties;
  theme?: typeof IconColorTheme[keyof typeof IconColorTheme];
}

export const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  ({ icon: Icon, size = 24, theme = "black", style, className, ...restProps }, ref) => {
    const iconProps: React.SVGProps<SVGSVGElement> = {
      className: cx("svg-icon", theme, className),
      style: size ? { width: size, height: "auto", ...style } : style,
      ...restProps,
    };

    return <Icon role="img" aria-hidden="true" ref={ref} {...iconProps} />;
  },
);
