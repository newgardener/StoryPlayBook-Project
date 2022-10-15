import * as React from "react";
import classNames from "classnames/bind";

import { componentList, defaultComponentProps } from "../../constants";
import {
  type AccordionCardProps,
  type BadgeProps,
  type ButtonGroupProps,
  type ButtonProps,
  type ChipProps,
  type DotLoadingProps,
  type FoldingMotionProps,
  type JSONInputBoxProps,
  type ProductListProps,
  type TypographyProps,
  AccordionCard,
  Badge,
  Button,
  ButtonGroup,
  Chip,
  DotLoading,
  FoldingMotion,
  JSONInputBox,
  ProductList,
  Toggler,
  Typography,
} from "../../design-system/components";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const ControlSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <dl className={cx("component-chip-list")}>
      <div className={cx("chips-container")}>
        <div className={cx("component-chip")}>
          {componentList.map((componentName, index) => (
            <dt key={index}>
              <Chip
                label={componentName}
                active={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            </dt>
          ))}
        </div>
      </div>
      <dd className={cx("component-control-section")}>
        <ComponentRenderPanel componentName={componentList[activeIndex]} />
        <ComponentControlPanel />
      </dd>
    </dl>
  );
};

type ComponentRenderPanelProps = {
  componentName: string;
};

const ComponentRenderPanel = ({ componentName }: ComponentRenderPanelProps) => {
  const getComponentToRender = React.useCallback(
    (componentName: string, args?: object) => {
      switch (componentName) {
        case "Typography":
          return (
            <Typography
              {...(defaultComponentProps[componentName] as TypographyProps)}
              {...args}
            >
              테스트용 Typography
            </Typography>
          );
        case "Badge":
          return (
            <Badge {...(defaultComponentProps[componentName] as BadgeProps)} {...args} />
          );
        case "Button":
          return (
            <Button
              {...(defaultComponentProps[componentName] as ButtonProps)}
              {...args}
            />
          );
        case "ButtonGroup":
          return (
            <ButtonGroup
              {...(defaultComponentProps[componentName] as ButtonGroupProps)}
              {...args}
            >
              <Button size="medium">테스트 버튼 1</Button>
              <Button size="medium">테스트 버튼 2</Button>
            </ButtonGroup>
          );
        case "Chip":
          return (
            <Chip {...(defaultComponentProps[componentName] as ChipProps)} {...args} />
          );
        case "Toggler":
          return <Toggler {...defaultComponentProps[componentName]} {...args} />;
        case "JSONInputBox":
          return (
            <JSONInputBox
              {...(defaultComponentProps[componentName] as JSONInputBoxProps)}
              {...args}
            />
          );
        case "DotLoading":
          return (
            <DotLoading
              {...(defaultComponentProps[componentName] as DotLoadingProps)}
              {...args}
            />
          );
        case "FoldingMotion":
          return (
            <FoldingMotion
              {...(defaultComponentProps[componentName] as FoldingMotionProps)}
              {...args}
            />
          );
        case "AccordionCard":
          return (
            <AccordionCard
              {...(defaultComponentProps[componentName] as AccordionCardProps)}
              {...args}
            />
          );
        case "ProductList":
          return (
            <ProductList
              {...(defaultComponentProps[componentName] as ProductListProps)}
              {...args}
            />
          );
        default:
          return null;
      }
    },
    [],
  );

  return (
    <div className={cx("component-render-panel")}>
      {getComponentToRender(componentName)}
    </div>
  );
};

const ComponentControlPanel = () => {
  return <div className={cx("component-control-panel")}></div>;
};
