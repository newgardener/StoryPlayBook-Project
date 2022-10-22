import * as React from "react";
import classNames from "classnames/bind";
import { motion, MotionProps, MotionValue, useMotionValue } from "framer-motion";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type Point = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

const css = {
  padding: 16,
  minBoundingClientTop: 125,
  maxBoundingClientBottom: 891,
};

type UseDrag = Point & {
  top: number;
  bottom: number;
};

const useDrag: (point: UseDrag) => MotionProps = ({ x, y, top, bottom }) => {
  const isDragging = React.useRef(false);

  return {
    drag: true,
    dragElastic: 0,
    dragMomentum: false,
    dragConstraints: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    onDragStart: () => {
      isDragging.current = true;
    },
    onDrag: (_, info) => {
      const newPointX = x.get() + info.delta.x;
      const newPointY = y.get() + info.delta.y;

      const minBoundedY = css.minBoundingClientTop - top;
      const maxBoundedY = css.maxBoundingClientBottom - bottom;

      if (newPointX < 0 || newPointX > 550) return;
      if (newPointY < minBoundedY || newPointY > maxBoundedY) return;

      x.set(x.get() + info.delta.x);
      y.set(y.get() + info.delta.y);
    },
  };
};

type DraggableWrapperProps = {
  component: React.ReactNode;
};

export const DraggableWrapper = ({ component }: DraggableWrapperProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(10);
  const point = { x, y };

  return (
    <DraggableComponentContainer {...point}>
      <DraggableComponent {...point} component={component} />
    </DraggableComponentContainer>
  );
};

type DraggableComponentContainerProps = Point & {
  children?: React.ReactNode;
};

const DraggableComponentContainer = ({
  children,
  x,
  y,
}: DraggableComponentContainerProps) => {
  return (
    <motion.div
      className={cx("draggable-container")}
      style={{ x, y, top: css.padding, left: css.padding }}
    >
      {children}
    </motion.div>
  );
};

type DraggableComponentProps = DraggableWrapperProps & Point;

const DraggableComponent = ({ x, y, component }: DraggableComponentProps) => {
  const [top, setTop] = React.useState(0);
  const [bottom, setBottom] = React.useState(0);
  const componentRef = React.useRef<HTMLDivElement>(null);

  const dragProps = useDrag({
    x,
    y,
    top,
    bottom,
  });

  React.useLayoutEffect(() => {
    setTop(componentRef.current?.getBoundingClientRect().top ?? 0);
    setBottom(componentRef.current?.getBoundingClientRect().bottom ?? 0);
  }, []);

  return (
    <motion.div {...dragProps} ref={componentRef}>
      {component}
    </motion.div>
  );
};
