import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroupField } from "./index";

export default {
  title: "StoryPlayBook/컴포넌트/RadioGroupField",
  component: RadioGroupField,
  args: {
    radioOptions: ["신정원", "신정투", "신정쓰리"],
    selectedRadioOption: "신정원",
  },
} as Meta<typeof RadioGroupField>;

export const 기본: StoryObj<typeof RadioGroupField> = {};
