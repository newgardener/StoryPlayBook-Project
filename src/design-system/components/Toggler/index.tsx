import * as React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type TogglerProps = {
  checked?: boolean;
  labels?: [string, string];
};

export const Toggler = ({ checked = false, labels }: TogglerProps) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  const toggleButton = () => setIsChecked(!isChecked);

  return (
    <div className={cx("toggle-container")} onClick={toggleButton}>
      <input
        className={cx("toggle-switch")}
        type="checkbox"
        value={isChecked ? 1 : 0}
        checked={isChecked}
        onChange={toggleButton}
      />
      <span>{labels ? labels[0] : "False"}</span>
      <span>{labels ? labels[1] : "True"}</span>
    </div>
  );
};
