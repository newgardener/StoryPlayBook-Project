import classNames from "classnames/bind";

import { type LoadingWrapperProps, LoadingWrapper } from "../LoadingWrapper";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type DotAnimation = "dotElastic" | "dotFlashing" | "dotTyping";

export interface DotLoadingProps extends Omit<LoadingWrapperProps, "children"> {
  animation?: DotAnimation;
}

export const DotLoading = ({
  className,
  loading = true,
  fullSize = false,
  animation,
}: DotLoadingProps) => {
  const Dot = () => {
    switch (animation) {
      case "dotElastic":
        return <div className={cx("dot-elastic")} />;
      case "dotFlashing":
        return <div className={cx("dot-flashing")} />;
      case "dotTyping":
        return <div className={cx("dot-typing")} />;
      default:
        return <div className={cx("dot-flashing")} />;
    }
  };

  return (
    <LoadingWrapper
      className={cx("dot-loading", className)}
      loading={loading}
      fullSize={fullSize}
    >
      {Dot()}
    </LoadingWrapper>
  );
};
