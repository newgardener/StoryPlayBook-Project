import classNames from "classnames/bind";

import { type LoadingWrapperProps, LoadingWrapper } from "../LoadingWrapper";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type DotAnimation = "DOT_ELASTIC" | "DOT_FLASHING" | "DOT_TYPING";

export interface DotLoadingProps extends Omit<LoadingWrapperProps, "children"> {
  animation?: DotAnimation;
}

export const DotLoading = ({ className, loading = true, animation }: DotLoadingProps) => {
  const Dot = () => {
    switch (animation) {
      case "DOT_ELASTIC":
        return <div className={cx("dot-elastic")}></div>;
      case "DOT_FLASHING":
        return <div className={cx("dot-flashing")}></div>;
      case "DOT_TYPING":
        return <div className={cx("dot-typing")}></div>;
      default:
        return <div className={cx("dot-typing")}></div>;
    }
  };

  return (
    <LoadingWrapper className={cx("dot-loading", className)} loading={loading}>
      {Dot()}
    </LoadingWrapper>
  );
};
