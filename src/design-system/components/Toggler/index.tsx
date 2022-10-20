import * as React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export type TogglerProps = {
  checked?: boolean;
  labels?: [string, string];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Toggler = ({ checked = false, labels, onChange }: TogglerProps) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const toggleButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setIsChecked(!isChecked);
  };

  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div
      className={cx("toggle-container", {
        "toggle-checked": isChecked,
        "toggle-not-checked": !isChecked,
      })}
      onChange={toggleButton}
    >
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
