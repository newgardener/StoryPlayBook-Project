import * as React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface LoadingWrapperProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  loading?: boolean;
  fullSize?: boolean;
  className?: string;
}

export const LoadingWrapper = ({
  children,
  loading,
  fullSize = false,
  className,
}: LoadingWrapperProps) => {
  return (
    <div className={cx("loading-base", className, { loading, fullSize })}>
      <div className={cx("loading-wrapper")}>{children}</div>
    </div>
  );
};
