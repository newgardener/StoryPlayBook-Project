import type { Meta, StoryObj } from "@storybook/react";

import { DotLoading } from "./index";

export default {
  title: "디자인시스템/컴포넌트/DotLoading",
  component: DotLoading,
  args: {
    animation: "dotElastic",
  },
} as Meta<typeof DotLoading>;

export const 로딩_DOT_ELASTIC: StoryObj<typeof DotLoading> = {
  args: {
    animation: "dotElastic",
  },
};

export const 로딩_DOT_FLASHING: StoryObj<typeof DotLoading> = {
  args: {
    animation: "dotFlashing",
  },
};

export const 로딩_DOT_TYPING: StoryObj<typeof DotLoading> = {
  args: {
    animation: "dotTyping",
  },
};
