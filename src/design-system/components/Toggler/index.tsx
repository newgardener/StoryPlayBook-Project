import * as React from "react";

import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type TogglerProps = {
  labels?: [string, string];
};

export const Toggler = ({ labels }: TogglerProps) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const toggleButton = () => setIsChecked(!isChecked);

  return (
    <div className={cx("toggle-container")} onClick={toggleButton}>
      <input
        className={cx("toggle-switch")}
        type="checkbox"
        checked={isChecked}
        onChange={toggleButton}
      />
      <span>{labels ? labels[0] : "False"}</span>
      <span>{labels ? labels[1] : "True"}</span>
    </div>
  );
};
