import * as React from "react";
import { createPortal } from "react-dom";
import classNames from "classnames/bind";
import { motion, MotionProps, MotionValue, useMotionValue } from "framer-motion";

import { defaultComponentProps } from "../../constants";
import { AccordionCard, AccordionCardProps } from "../../design-system/components";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type Point = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

const css = {
  padding: 16,
  minBoundingClientTop: 111,
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

      if (newPointX < 0 || newPointX > 290) return;
      if (newPointY < minBoundedY || newPointY > maxBoundedY) return;

      x.set(x.get() + info.delta.x);
      y.set(y.get() + info.delta.y);
    },
  };
};

export const DraggableWrapper = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(10);
  const point = { x, y };

  return (
    <DraggableComponentContainer {...point}>
      <DraggableComponent {...point} />
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
    <motion.div style={{ x, y, top: css.padding, left: css.padding }}>
      {children}
    </motion.div>
  );
};

const DraggableComponent = (point: Point) => {
  const [top, setTop] = React.useState(0);
  const [bottom, setBottom] = React.useState(0);
  const componentRef = React.useRef<HTMLDivElement>(null);

  const dragProps = useDrag({
    ...point,
    top,
    bottom,
  });

  React.useLayoutEffect(() => {
    setTop(componentRef.current?.getBoundingClientRect().top ?? 0);
    setBottom(componentRef.current?.getBoundingClientRect().bottom ?? 0);
  }, []);

  return (
    <motion.div {...dragProps} ref={componentRef}>
      <AccordionCard
        {...(defaultComponentProps["AccordionCard"] as AccordionCardProps)}
      />
    </motion.div>
  );
};
