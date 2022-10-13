import type { Meta, StoryObj } from "@storybook/react";

import {
  RadioButtonGroup,
  RadioButtonInGroup,
  RadioButtonRowGroup,
  type RadioButtonGroupProps,
} from "./index";

export default {
  title: "디자인시스템/컴포넌트/RadioButtonGroup",
  component: RadioButtonGroup,
} as Meta<RadioButtonGroupProps>;

export const 기본: StoryObj<RadioButtonGroupProps> = {
  render() {
    return (
      <RadioButtonGroup name="테스트">
        <RadioButtonRowGroup>
          <RadioButtonInGroup>신정원</RadioButtonInGroup>
        </RadioButtonRowGroup>
        <RadioButtonRowGroup>
          <RadioButtonInGroup>신정투</RadioButtonInGroup>
        </RadioButtonRowGroup>
        <RadioButtonRowGroup>
          <RadioButtonInGroup>신정쓰리</RadioButtonInGroup>
        </RadioButtonRowGroup>
      </RadioButtonGroup>
    );
  },
};
