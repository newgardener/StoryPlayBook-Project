import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type TestProps = {};

export const Test = () => {
  return <div className={cx("loading-dot")}>This a Test Component</div>;
};
