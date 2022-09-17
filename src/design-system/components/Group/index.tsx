import * as React from "react";

import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export interface GroupProps
  extends React.PropsWithoutRef<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  > {
  direction?: "row" | "column";
  ratio?: number[];
  className?: string;
}

export const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  ({ direction, ratio, children, className, ...restProps }, ref) => {
    const getGroupItemStyleProps = React.useCallback(
      ({
        direction,
        ratio,
        index,
      }: Pick<GroupProps, "direction" | "ratio"> & { index: number }) => {
        return {
          width: direction === "row" ? "auto" : null,
          height: direction ? "auto" : null,
          flex: ratio ? `${ratio[index]} 0 0` : null,
        };
      },
      [],
    );

    const getGroupChildren = React.useCallback(() => {
      return (React.Children.toArray(children) as React.ReactElement[]).map(
        (child: React.ReactElement, index: number) => {
          return React.cloneElement(child, {
            key: child?.key ?? `group-item-${index}`,
            style: {
              ...child?.props?.style,
              ...getGroupItemStyleProps({ direction, ratio, index }),
            },
          });
        },
      );
    }, []);

    return (
      <div className={cx("group", direction, className)} ref={ref} {...restProps}>
        {getGroupChildren()}
      </div>
    );
  },
);
