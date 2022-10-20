import * as React from "react";
import {
  type Control,
  FieldValues,
  useController,
  useForm,
  useFormState,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames/bind";
import { z } from "zod";

import {
  componentNameList,
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
import { componentSchemaMap } from "../../schema";
import { InputType } from "../../types";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const ControlSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <dl className={cx("component-chip-list")}>
      <div className={cx("chips-container")}>
        <div className={cx("component-chip")}>
          {componentNameList.map((componentName, index) => (
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
      <ComponentPanelGroup componentName={componentNameList[activeIndex]} />
    </dl>
  );
};

type ComponentPanelGroupProps = {
  componentName: string;
};

const ComponentPanelGroup = ({ componentName }: ComponentPanelGroupProps) => {
  const componentSchema = componentSchemaMap[componentName];

  const { control, getValues, setValue, reset } = useForm<
    z.infer<typeof componentSchema>
  >({
    mode: "onChange",
    resolver: zodResolver(componentSchema),
  });

  React.useEffect(() => {
    reset(defaultComponentProps[componentName]);
  }, [componentName]);

  return (
    <dd className={cx("component-control-section")}>
      <ComponentRenderPanel componentName={componentName} />
      <ComponentControlPanel componentName={componentName} control={control} />
    </dd>
  );
};

const ComponentRenderPanel = ({ componentName }: ComponentPanelGroupProps) => {
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

type ComponentControlPanelProps<T extends FieldValues = FieldValues> =
  ComponentPanelGroupProps & {
    control: Control<T>;
  };

const ComponentControlPanel = ({
  componentName,
  control,
}: ComponentControlPanelProps) => {
  const componentInputForm = componentPropsTypeMap[componentName];

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
            <ComponentControlForm
              key={index}
              control={control}
              fieldName={fieldName}
              fieldType={fieldInfo[0]}
              fieldDefaultValue={fieldInfo[1]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

type ComponentControlFormProps = Pick<ComponentControlPanelProps, "control"> & {
  fieldName: string;
  fieldType: string;
  fieldDefaultValue: string | string[] | object | object[];
};

const ComponentControlForm = ({
  control,
  fieldName,
  fieldType,
  fieldDefaultValue,
}: ComponentControlFormProps) => {
  const { field } = useController({
    name: fieldName,
    control,
  });
  // console.log(fieldName, fieldType, fieldDefaultValue);
  console.log(fieldName, field.value);

  const getInputFieldComponentByType = ({
    fieldName,
    fieldType,
    fieldDefaultValue,
  }: Omit<ComponentControlFormProps, "control">) => {
    switch (fieldType) {
      case InputType.JSON:
        return (
          <JSONInputBox
            propsName={fieldName}
            defaultData={fieldDefaultValue as object | object[]}
          />
        );
      case InputType.TEXT:
      case InputType.NUMBER:
        return (
          <InputElement
            name={fieldName}
            value={field.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              field.onChange(e.target.value);
            }}
          />
        );
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
    <React.Fragment>
      <tr>
        <td>{fieldName}</td>
        <td>
          {getInputFieldComponentByType({
            fieldName,
            fieldType,
            fieldDefaultValue,
          })}
        </td>
      </tr>
    </React.Fragment>
  );
};
