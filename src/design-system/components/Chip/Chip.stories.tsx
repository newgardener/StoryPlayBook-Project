import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "./index";

export default {
  title: "디자인시스템/컴포넌트/Chip",
  component: Chip,
  args: {
    label: "신정원촉촉한초코칩",
    disabled: false,
    active: false,
  },
} as Meta<typeof Chip>;

export const 기본: StoryObj<typeof Chip> = {};
