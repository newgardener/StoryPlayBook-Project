import * as React from "react";
import {
  useForm,
  useWatch,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames/bind";
import { z } from "zod";

import {
  componentNameList,
  defaultComponentProps,
} from "../../constants";
import { Chip } from '../../design-system/components';
import { componentSchemaMap } from "../../schema";
import { composeComponentPropsData } from '../../utils';

import { ComponentControlPanel } from './ComponentControlPanel';
import { ComponentRenderPanel } from './ComponentRenderPanel';

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

export type ComponentPanelGroupProps = {
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

