import * as React from "react";

import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface LoadingWrapperProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
}

export const LoadingWrapper = ({ children, loading, className }: LoadingWrapperProps) => {
  return (
    <div className={cx("loading-base", { loading, className })}>
      <div className={cx("loading-wrapper")}>{children}</div>
    </div>
  );
};
