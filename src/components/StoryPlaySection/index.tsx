import * as React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const StoryPlaySection = () => {
  return (
    <div className={cx("storyplay-wrapper")}>
      <div className={cx("story-canvas")}></div>
    </div>
  );
};
