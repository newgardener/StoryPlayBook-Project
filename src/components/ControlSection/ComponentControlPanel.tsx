import * as React from "react";
import { type Control, FieldValues, useController } from "react-hook-form";
import classNames from "classnames/bind";

import { componentPropsTypeMap } from "../../constants";
import { InputElement, Toggler } from "../../design-system/components";
import { InputType } from "../../types";
import { RadioGroupField } from "../RadioGroupField";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

type ComponentControlPanelProps<T extends FieldValues = FieldValues> = {
  componentName: string;
  control: Control<T>;
};

export const ComponentControlPanel = ({
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
