import * as React from "react";
import {
  type Control,
  FieldValues,
  useController,
  useForm,
  useWatch,
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
  Skeleton,
  SkeletonToggler,
  Toggler,
  Typography,
} from "../../design-system/components";
import { componentSchemaMap } from "../../schema";
import { InputType } from "../../types";
import { composeComponentPropsData } from "../../utils";
import { RadioGroupField } from "../RadioGroupField";

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
  const componentPropsNames = Object.keys(defaultComponentProps[componentName]);

  const { control, reset } = useForm<z.infer<typeof componentSchema>>({
    mode: "onChange",
    resolver: zodResolver(componentSchema),
    defaultValues: defaultComponentProps[componentName],
  });

  const componentPropsData = useWatch({
    name: componentPropsNames,
    control,
  });

  React.useEffect(() => {
    reset({
      ...defaultComponentProps[componentName],
      skeleton: false,
    });
  }, [componentName]);

  return (
    <dd className={cx("component-control-section")}>
      <ComponentRenderPanel
        componentName={componentName}
        propsData={composeComponentPropsData(componentPropsNames, componentPropsData)}
        control={control}
      />
      <ComponentControlPanel componentName={componentName} control={control} />
    </dd>
  );
};

type ComponentRenderPanelProps<T extends FieldValues = FieldValues> =
  ComponentPanelGroupProps & {
    propsData?: object;
    control: Control<T>;
  };

const ComponentRenderPanel = ({
  componentName,
  propsData,
  control,
}: ComponentRenderPanelProps) => {
  const isSkeletonOn = useWatch({
    name: "skeleton",
    control,
  });

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
              {...(defaultComponentProps[componentName] as TypographyProps)}
              {...args}
            />
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
              // {...args}
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
              // {...args}
            />
          );
        case "ProductList":
          return (
            <ProductList
              {...(defaultComponentProps[componentName] as ProductListProps)}
              // {...args}
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
        showSkeleton={isSkeletonOn}
        children={getComponentToRender(componentName, propsData)}
        skeleton={componentSkeletonMap[componentName]}
      />
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
          {componentName !== "DotLoading" && <CommonControlForm control={control} />}
        </tbody>
      </table>
    </div>
  );
};

const CommonControlForm = ({ control }: Pick<ComponentControlPanelProps, "control">) => {
  const { field } = useController({
    name: "skeleton",
    control,
  });

  return (
    <tr>
      <td>
        <Toggler
          checked={field.value}
          labels={["Skeleton Off", "Skeleton On"]}
          onChange={(e) => field.onChange(e.target.checked)}
        />
      </td>
    </tr>
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
          <RadioGroupField
            radioOptions={fieldDefaultValue as string[]}
            selectedRadioOption={field.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              field.onChange(e.target.value);
            }}
          />
        );
      case InputType.TOGGLE:
        return (
          <Toggler
            checked={field.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              field.onChange(e.target.checked);
            }}
          />
        );
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
