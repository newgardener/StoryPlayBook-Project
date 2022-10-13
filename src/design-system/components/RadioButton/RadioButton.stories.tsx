import type { Meta, StoryObj } from "@storybook/react";

import { RadioButton, type RadioButtonProps } from "./index";

export default {
  title: "디자인시스템/컴포넌트/RadioButton",
  component: RadioButton,
} as Meta<RadioButtonProps>;

export const 기본: StoryObj<RadioButtonProps> = {
  render() {
    return <RadioButton>신정원</RadioButton>;
  },
};
