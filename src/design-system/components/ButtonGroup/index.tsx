import * as React from "react";

import classNames from "classnames/bind";

import { type ButtonSize, BUTTON_GROUP, BUTTON_SIZE } from "../Button";
import { Group, GroupProps } from "../Group";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface ButtonGroupProps extends GroupProps {
  buttonGroupType: typeof BUTTON_GROUP[keyof typeof BUTTON_GROUP];
  buttonSize: ButtonSize;
  children?: React.ReactElement | React.ReactElement[];
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ buttonGroupType, buttonSize, children, className, ...restProps }, ref) => {
    const isStackableButtonSize = (buttonSize: ButtonSize) =>
      buttonSize === BUTTON_SIZE.MEDIUM || buttonSize === BUTTON_SIZE.SMALL;

    const buttonGroupDirection =
      isStackableButtonSize(buttonSize) && buttonGroupType === BUTTON_GROUP.STACKED
        ? "column"
        : "row";

    const getButtonGroupRatio = React.useCallback((): number[] => {
      switch (buttonGroupType) {
        case BUTTON_GROUP.ONE_TO_ONE:
          return [1, 1];
        case BUTTON_GROUP.STACKED:
          return isStackableButtonSize(buttonSize) ? [1, 1] : [];
        default:
          return [];
      }
    }, []);

    const getButtonArray = React.useCallback(() => {
      const buttonArray = React.Children.toArray(children);
      return buttonArray.map((child: React.ReactNode) =>
        child ? <div className={cx("button-group-item")}>{child}</div> : null,
      );
    }, []);

    return (
      <Group
        className={cx("button-group", buttonGroupDirection, className)}
        direction={buttonGroupDirection}
        ratio={getButtonGroupRatio()}
        ref={ref}
        {...restProps}
      >
        {getButtonArray()}
      </Group>
    );
  },
);
