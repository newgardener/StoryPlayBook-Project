import * as React from "react";
import { Control, FieldValues, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames/bind";
import { useRecoilState, useRecoilValue } from "recoil";
import { z } from "zod";

import { storyComponentNameList } from "../../constants";
import {
  AccordionCard,
  AccordionCardProps,
  Badge,
  BadgeProps,
  Button,
  ButtonProps,
  Chip,
  ChipProps,
  DotLoading,
  FoldingMotion,
  FoldingMotionProps,
  ProductList,
  ProductListProps,
  Toggler,
  TogglerProps,
  Typography,
  TypographyProps,
} from "../../design-system/components";
import { componentPropsState, storyPlaygroundFormState } from "../../store";
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
  isLoading: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

export const StoryPlaySection = () => {
  const [formState, setFormState] = useRecoilState(storyPlaygroundFormState);

  const { getValues, setValue, control } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: formState,
  });

  const options = useWatch({
    control,
  });

  return (
    <div className={cx("storyplay-wrapper")}>
      <div className={cx("options-container")}>
        {storyComponentNameList.map((componentName, index) => {
          return (
            <Chip
              key={index}
              active={options[componentName]}
              label={componentName}
              disabled={options.isLoading}
              onClick={() => {
                setValue(componentName, !getValues(componentName));
                setFormState(getValues());
              }}
            />
          );
        })}
        <Toggler
          className={cx("loading-toggler")}
          labels={["Not Loading", "Loading..."]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue("isLoading", e.target.checked)
          }
        />
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

  const componentProps = useRecoilValue(componentPropsState);

  if (options.isLoading) {
    return (
      <div className={cx("story-render-panel")}>
        <DotLoading className={cx("story-render-loading")} />
      </div>
    );
  }

  return (
    <div className={cx("story-render-panel")}>
      {options.AccordionCard && (
        <DraggableWrapper
          component={
            <AccordionCard
              className={cx("story-component")}
              {...(componentProps["AccordionCard"] as AccordionCardProps)}
            />
          }
        />
      )}
      {options.FoldingMotion && (
        <DraggableWrapper
          component={
            <FoldingMotion
              className={cx("story-component")}
              {...(componentProps["FoldingMotion"] as FoldingMotionProps)}
            />
          }
        />
      )}
      {options.ProductList && (
        <DraggableWrapper
          component={
            <ProductList
              className={cx("story-component")}
              {...(componentProps["ProductList"] as ProductListProps)}
            />
          }
        />
      )}
      {options.Typography && (
        <DraggableWrapper
          component={
            <Typography
              className={cx("story-component")}
              {...(componentProps["Typography"] as TypographyProps)}
            />
          }
        />
      )}
      {options.Badge && (
        <DraggableWrapper
          component={
            <Badge
              className={cx("story-component")}
              {...(componentProps["Badge"] as BadgeProps)}
            />
          }
        />
      )}
      {options.Button && (
        <DraggableWrapper
          component={
            <Button
              className={cx("story-component")}
              {...(componentProps["Button"] as ButtonProps)}
            />
          }
        />
      )}
      {options.Chip && (
        <DraggableWrapper
          component={
            <Chip
              className={cx("story-component")}
              {...(componentProps["Chip"] as ChipProps)}
            />
          }
        />
      )}
      {options.Toggler && (
        <DraggableWrapper
          component={
            <Toggler
              className={cx("story-component")}
              {...(componentProps["Toggler"] as TogglerProps)}
            />
          }
        />
      )}
    </div>
  );
};
