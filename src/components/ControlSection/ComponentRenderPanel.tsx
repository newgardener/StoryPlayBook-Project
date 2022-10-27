import * as React from "react";
import { type Control, FieldValues, useWatch } from "react-hook-form";
import classNames from "classnames/bind";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  type AccordionCardProps,
  type BadgeProps,
  type ButtonGroupProps,
  type ButtonProps,
  type ChipProps,
  type DotLoadingProps,
  type FoldingMotionProps,
  type ProductListProps,
  type TypographyProps,
  AccordionCard,
  Badge,
  Button,
  ButtonGroup,
  Chip,
  DotLoading,
  FoldingMotion,
  ProductList,
  Skeleton,
  SkeletonToggler,
  Toggler,
  Typography,
} from "../../design-system/components";
import { componentPropsState } from "../../store";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type ComponentRenderPanelProps<T extends FieldValues = FieldValues> = {
  componentName: string;
  propsData?: object;
  control: Control<T>;
};

export const ComponentRenderPanel = ({
  componentName,
  propsData,
  control,
}: ComponentRenderPanelProps) => {
  const isSkeletonOn = useWatch({
    name: "skeleton",
    control,
  });

  const [componentProps, setComponentProps] = useRecoilState(componentPropsState);

  const componentSkeletonMap = React.useMemo(() => {
    return {
      Typography: <Skeleton width="250px" height="35px" />,
      Badge: <Skeleton width="150px" height="16px" />,
      Button: <Skeleton width="105px" height="55px" />,
      ButtonGroup: (
        <>
          <Skeleton width="120px" height="52px" margin="0 0 5px" />
          <Skeleton width="120px" height="52px" />
        </>
      ),
      Chip: <Skeleton width="150px" height="35px" />,
      Toggler: <Skeleton width="120px" height="30px" />,
      JSONInputBox: <Skeleton width="145px" height="100px" />,
      FoldingMotion: <Skeleton width="135px" height="65px" />,
      AccordionCard: <Skeleton width="480px" height="225px" />,
      ProductList: <Skeleton width="464px" height="270px" />,
    } as {
      [key: string]: React.ReactNode;
    };
  }, []);

  const getComponentToRender = React.useCallback(
    (componentName: string, args?: object) => {
      switch (componentName) {
        case "Typography":
          return (
            <Typography
              {...(componentProps[componentName] as TypographyProps)}
              {...args}
            />
          );
        case "Badge":
          return <Badge {...(componentProps[componentName] as BadgeProps)} {...args} />;
        case "Button":
          return <Button {...(componentProps[componentName] as ButtonProps)} {...args} />;
        case "ButtonGroup":
          return (
            <ButtonGroup
              {...(componentProps[componentName] as ButtonGroupProps)}
              {...args}
            >
              <Button size="medium">테스트 버튼 1</Button>
              <Button size="medium">테스트 버튼 2</Button>
            </ButtonGroup>
          );
        case "Chip":
          return <Chip {...(componentProps[componentName] as ChipProps)} {...args} />;
        case "Toggler":
          return <Toggler {...componentProps[componentName]} {...args} />;
        case "DotLoading":
          return (
            <DotLoading
              {...(componentProps[componentName] as DotLoadingProps)}
              {...args}
            />
          );
        case "FoldingMotion":
          return (
            <FoldingMotion
              {...(componentProps[componentName] as FoldingMotionProps)}
              {...args}
            />
          );
        case "AccordionCard":
          return (
            <AccordionCard
              {...(componentProps[componentName] as AccordionCardProps)}
              {...args}
            />
          );
        case "ProductList":
          return (
            <ProductList
              {...(componentProps[componentName] as ProductListProps)}
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
      <SkeletonToggler
        className={cx({
          "render-button": componentName === "Button",
        })}
        showSkeleton={isSkeletonOn}
        children={getComponentToRender(componentName, propsData)}
        skeleton={componentSkeletonMap[componentName]}
      />
    </div>
  );
};
