import * as React from "react";
import classNames from "classnames/bind";

import { defaultComponentProps } from "../../constants";
import {
  AccordionCard,
  AccordionCardProps,
  ProductList,
  ProductListProps,
} from "../../design-system/components";
import { DraggableWrapper } from "../DraggableWrapper";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const StoryPlaySection = () => {
  return (
    <div className={cx("storyplay-wrapper")}>
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
      </div>
    </div>
  );
};
