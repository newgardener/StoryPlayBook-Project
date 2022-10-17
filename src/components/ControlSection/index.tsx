import * as React from "react";
import classNames from "classnames/bind";

import {
  componentList,
  componentPropsTypeMap,
  defaultComponentProps,
} from "../../constants";
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
  InputElement,
  JSONInputBox,
  ProductList,
  RadioButtonGroup,
  RadioButtonInGroup,
  RadioButtonRowGroup,
  Toggler,
  Typography,
} from "../../design-system/components";
import { InputType } from "../../types";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const ControlSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <dl className={cx("component-chip-list")}>
      <div className={cx("chips-container")}>
        <div className={cx("component-chip")}>
          {componentList.map((componentName, index) => (
            <dt key={`chip-${index}`}>
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
        <ComponentControlPanel componentName={componentList[activeIndex]} />
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

type ComponentControlPanelProps = {
  componentName: string;
};

const ComponentControlPanel = ({ componentName }: ComponentControlPanelProps) => {
  const componentInputForm = componentPropsTypeMap[componentName];

  const getInputFieldComponentByType = ({
    fieldName,
    fieldType,
    fieldDefaultValue,
  }: {
    fieldName: string;
    fieldType: string;
    fieldDefaultValue: string | string[] | object | object[];
  }) => {
    console.log(fieldDefaultValue);

    switch (fieldType) {
      case InputType.JSON:
        return <JSONInputBox defaultData={fieldDefaultValue as object | object[]} />;
      case InputType.TEXT:
      case InputType.NUMBER:
        return <InputElement value={fieldDefaultValue as string} />;
      case InputType.RADIO:
        return (
          <RadioButtonGroup name={fieldName}>
            {(fieldDefaultValue as string[]).map((option, index) => (
              <RadioButtonRowGroup key={`button-row-group-${index}`}>
                <RadioButtonInGroup>{option}</RadioButtonInGroup>
              </RadioButtonRowGroup>
            ))}
          </RadioButtonGroup>
        );
      case InputType.TOGGLE:
        return <Toggler />;
      default:
        return null;
    }
  };

  return (
    <div className={cx("component-control-panel")}>
      <table>
        <colgroup>
          <col width="25%" />
          <col width="75%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">
              <span>Name</span>
            </th>
            <th scope="col">
              <span>Control</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(componentInputForm).map(([fieldName, fieldInfo], index) => (
            <React.Fragment key={`field-${index}`}>
              <tr>
                <td>{fieldName}</td>
                <td>
                  {getInputFieldComponentByType({
                    fieldName,
                    fieldType: fieldInfo[0],
                    fieldDefaultValue: fieldInfo[1],
                  })}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
