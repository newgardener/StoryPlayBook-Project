import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const Header = () => {
  return <header className={cx("header")}>StoryPlayBook</header>;
};
