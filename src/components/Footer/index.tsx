import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const Footer = () => {
  return (
    <footer className={cx("footer")}>
      Copyright 2022 © Jeongwon Shin All Right Reserved
    </footer>
  );
};
