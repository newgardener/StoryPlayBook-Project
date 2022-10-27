import * as React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface SkeletonProps
  extends React.PropsWithoutRef<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  > {
  borderRadius?: string;
  width: string;
  height: string;
  margin?: string;
  className?: string;
}

const BORDER_RADIUS = "32px";
const HEIGHT = "35px";

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      width = "100%",
      height = HEIGHT,
      borderRadius = BORDER_RADIUS,
      margin,
      className,
      ...restProps
    },
    ref,
  ) => {
    const skeletonStyleProps = React.useMemo(() => {
      return {
        width,
        height,
        margin,
        borderRadius,
      };
    }, [width, height, margin, borderRadius]);

    return (
      <div
        className={cx("skeleton", className)}
        style={skeletonStyleProps}
        ref={ref}
        {...restProps}
      />
    );
  },
);
