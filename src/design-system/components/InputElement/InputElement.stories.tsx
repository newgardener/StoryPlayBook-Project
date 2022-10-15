import type { Meta, StoryObj } from "@storybook/react";

import { type InputElementProps,InputElement } from "./index";

export default {
  title: "디자인시스템/컴포넌트/InputElement",
  component: InputElement,
} as Meta<InputElementProps>;

export const 기본: StoryObj<InputElementProps> = {
  args: {
    placeholder: "신정원",
  },
};
