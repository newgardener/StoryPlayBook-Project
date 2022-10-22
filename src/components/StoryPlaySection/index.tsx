import * as React from "react";
import { Control, FieldValues, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames/bind";
import { z } from "zod";

import { defaultComponentProps, storyComponentNameList } from "../../constants";
import {
  AccordionCard,
  AccordionCardProps,
  Badge,
  BadgeProps,
  Button,
  ButtonProps,
  Chip,
  ChipProps,
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

const schema = z.object({
  Typography: z.boolean(),
  Badge: z.boolean(),
  Button: z.boolean(),
  Chip: z.boolean(),
  Toggler: z.boolean(),
  FoldingMotion: z.boolean(),
  AccordionCard: z.boolean(),
  ProductList: z.boolean(),
});

const defaultValues = {
  Typography: false,
  Badge: false,
  Button: false,
  Chip: false,
  Toggler: false,
  FoldingMotion: false,
  AccordionCard: false,
  ProductList: false,
};

type FormValues = z.infer<typeof schema>;

export const StoryPlaySection = () => {
  const { getValues, setValue, control } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues,
  });

  const options = useWatch({
    control,
  });

  return (
    <div className={cx("storyplay-wrapper")}>
      <div className={cx("chips-container")}>
        {storyComponentNameList.map((componentName, index) => {
          return (
            <Chip
              key={index}
              active={options[componentName]}
              label={componentName}
              onClick={() => {
                setValue(componentName, !getValues(componentName));
              }}
            />
          );
        })}
      </div>
      <StoryPlayRenderPanel control={control} />
    </div>
  );
};

type StoryPlayRenderPanelProps<T extends FieldValues = FormValues> = {
  control: Control<T>;
};

const StoryPlayRenderPanel = ({ control }: StoryPlayRenderPanelProps) => {
  const options = useWatch({
    control,
  });

  return (
    <div className={cx("story-render-panel")}>
      {options.AccordionCard && (
        <DraggableWrapper
          component={
            <AccordionCard
              className={cx("story-component")}
              {...(defaultComponentProps["AccordionCard"] as AccordionCardProps)}
            />
          }
        />
      )}
      {options.FoldingMotion && (
        <DraggableWrapper
          component={
            <FoldingMotion
              className={cx("story-component")}
              {...(defaultComponentProps["FoldingMotion"] as FoldingMotionProps)}
            />
          }
        />
      )}
      {options.ProductList && (
        <DraggableWrapper
          component={
            <ProductList
              className={cx("story-component")}
              {...(defaultComponentProps["ProductList"] as ProductListProps)}
            />
          }
        />
      )}
      {options.Typography && (
        <DraggableWrapper
          component={
            <Typography
              className={cx("story-component")}
              {...(defaultComponentProps["Typography"] as TypographyProps)}
            />
          }
        />
      )}
      {options.Badge && (
        <DraggableWrapper
          component={
            <Badge
              className={cx("story-component")}
              {...(defaultComponentProps["Badge"] as BadgeProps)}
            />
          }
        />
      )}
      {options.Button && (
        <DraggableWrapper
          component={
            <Button
              className={cx("story-component")}
              {...(defaultComponentProps["Button"] as ButtonProps)}
            />
          }
        />
      )}
      {options.Chip && (
        <DraggableWrapper
          component={
            <Chip
              className={cx("story-component")}
              {...(defaultComponentProps["Chip"] as ChipProps)}
            />
          }
        />
      )}
      {options.Toggler && (
        <DraggableWrapper
          component={
            <Toggler
              className={cx("story-component")}
              {...(defaultComponentProps["Toggler"] as TogglerProps)}
            />
          }
        />
      )}
    </div>
  );
};
