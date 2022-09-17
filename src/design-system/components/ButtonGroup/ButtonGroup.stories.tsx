import type { Meta, StoryObj } from "@storybook/react";

import { ButtonGroup, type ButtonGroupProps } from "./index";
import { type ButtonSize, BUTTON_GROUP, BUTTON_SIZE } from "../Button";
import { Button } from "../Button";

export default {
  title: "디자인시스템/컴포넌트/ButtonGroup",
  component: ButtonGroup,
} as Meta<ButtonGroupProps>;

export const 버튼그룹_ONE_TO_ONE = (args?: Partial<ButtonGroupProps>) => (
  <ButtonGroup
    buttonGroupType={BUTTON_GROUP.ONE_TO_ONE}
    buttonSize={BUTTON_SIZE.MEDIUM}
    {...args}
  >
    <Button size="medium">TEST1</Button>
    <Button size="medium">TEST2</Button>
  </ButtonGroup>
);

export const 버튼그룹_STACKED = (args?: Partial<ButtonGroupProps>) => (
  <ButtonGroup
    buttonGroupType={BUTTON_GROUP.STACKED}
    buttonSize={BUTTON_SIZE.MEDIUM}
    {...args}
  >
    <Button size="medium">TEST1</Button>
    <Button size="medium">TEST2</Button>
  </ButtonGroup>
);
