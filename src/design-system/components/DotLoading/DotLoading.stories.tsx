import type { Meta, StoryObj } from "@storybook/react";

import { DotLoading } from "./index";

export default {
  title: "디자인시스템/컴포넌트/DotLoading",
  component: DotLoading,
  args: {
    animation: "DOT_ELASTIC",
    loading: true,
  },
} as Meta<typeof DotLoading>;

export const 로딩_DOT_ELASTIC: StoryObj<typeof DotLoading> = {
  args: {
    animation: "DOT_ELASTIC",
    loading: true,
  },
};

export const 로딩_DOT_FLASHING: StoryObj<typeof DotLoading> = {
  args: {
    animation: "DOT_FLASHING",
    loading: true,
  },
};

export const 로딩_DOT_TYPING: StoryObj<typeof DotLoading> = {
  args: {
    animation: "DOT_TYPING",
    loading: true,
  },
};
