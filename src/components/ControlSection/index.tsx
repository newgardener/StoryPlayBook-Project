import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames/bind";
import { useRecoilState } from "recoil";
import { z } from "zod";

import { componentNameList } from "../../constants";
import { Chip } from "../../design-system/components";
import { componentSchemaMap } from "../../schema";
import { activeComponentChipIndex, componentPropsState } from "../../store";
import { composeComponentPropsData } from "../../utils";

import { ComponentControlPanel } from "./ComponentControlPanel";
import { ComponentRenderPanel } from "./ComponentRenderPanel";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const ControlSection = () => {
  return (
    <dl className={cx("component-chip-list")}>
      <ComponentPanelGroup />
    </dl>
  );
};

const ComponentPanelGroup = () => {
  const [activeIndex, setActiveIndex] = useRecoilState(activeComponentChipIndex);
  const [componentProps, setComponentProps] = useRecoilState(componentPropsState);

  const componentName = componentNameList[activeIndex];
  const componentSchema = componentSchemaMap[componentName];
  const componentPropsNames = Object.keys(componentProps[componentName]);

  const { control, reset, getValues } = useForm<z.infer<typeof componentSchema>>({
    mode: "onChange",
    resolver: zodResolver(componentSchema),
    defaultValues: componentProps[componentName],
  });

  const componentPropsData = useWatch({
    name: componentPropsNames,
    control,
  });

  React.useEffect(() => {
    reset({
      ...componentProps[componentName],
      skeleton: false,
    });
    return () => {
      setComponentProps({
        ...componentProps,
        [componentNameList[activeIndex]]: getValues(),
      });
    };
  }, [componentName]);

  return (
    <>
      <div className={cx("chips-container")}>
        <div className={cx("component-chip")}>
          {componentNameList.map((componentName, index) => (
            <dt key={`chip-${index}`}>
              <Chip
                label={componentName}
                active={activeIndex === index}
                onClick={() => {
                  setComponentProps({
                    ...componentProps,
                    [componentNameList[activeIndex]]: getValues(),
                  });
                  setActiveIndex(index);
                }}
              />
            </dt>
          ))}
        </div>
      </div>
      <dd className={cx("component-control-section")}>
        <ComponentRenderPanel
          componentName={componentName}
          propsData={composeComponentPropsData(componentPropsNames, componentPropsData)}
          control={control}
        />
        <ComponentControlPanel componentName={componentName} control={control} />
      </dd>
    </>
  );
};
