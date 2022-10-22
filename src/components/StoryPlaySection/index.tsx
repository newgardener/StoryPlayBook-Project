import * as React from "react";
import classNames from "classnames/bind";

import { componentNameList, defaultComponentProps } from "../../constants";
import {
  AccordionCard,
  AccordionCardProps,
  Badge,
  BadgeProps,
  Button,
  ButtonProps,
  Chip,
  FoldingMotion,
  FoldingMotionProps,
  ProductList,
  ProductListProps,
  Toggler,
  TogglerProps,
  Typography,
  TypographyProps,
} from "../../design-system/components";
import { DraggableWrapper } from "../DraggableWrapper";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const StoryPlaySection = () => {
  return (
    <div className={cx("storyplay-wrapper")}>
      <div className={cx("chips-container")}>
        {componentNameList.map((componentName, index) => {
          if (componentName === "DotLoading" || componentName === "JSONInputBox") return;
          return <Chip key={index} label={componentName} />;
        })}
      </div>
      <div className={cx("story-render-panel")}>
        <DraggableWrapper
          component={
            <AccordionCard
              className={cx("story-component")}
              {...(defaultComponentProps["AccordionCard"] as AccordionCardProps)}
            />
          }
        />
        <DraggableWrapper
          component={
            <ProductList
              className={cx("story-component")}
              {...(defaultComponentProps["ProductList"] as ProductListProps)}
            />
          }
        />
        <DraggableWrapper
          component={
            <FoldingMotion
              className={cx("story-component")}
              {...(defaultComponentProps["FoldingMotion"] as FoldingMotionProps)}
            />
          }
        />
        <DraggableWrapper
          component={
            <Typography
              className={cx("story-component")}
              {...(defaultComponentProps["Typography"] as TypographyProps)}
            />
          }
        />
        <DraggableWrapper
          component={
            <Badge
              className={cx("story-component")}
              {...(defaultComponentProps["Badge"] as BadgeProps)}
            />
          }
        />
        <DraggableWrapper
          component={
            <Button
              className={cx("story-component")}
              {...(defaultComponentProps["Button"] as ButtonProps)}
            />
          }
        />
        <DraggableWrapper
          component={
            <Toggler
              className={cx("story-component")}
              {...(defaultComponentProps["Toggler"] as TogglerProps)}
            />
          }
        />
      </div>
    </div>
  );
};
