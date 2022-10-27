import type { Meta, StoryObj } from "@storybook/react";

import { Toggler } from "./index";

export default {
  title: "디자인시스템/컴포넌트/Toggler",
  component: Toggler,
} as Meta<typeof Toggler>;

export const skeletonToggler: StoryObj<typeof Toggler> = {
  args: {
    checked: true,
    labels: ["Skeleton Off", "Skeleton On"],
  },
};

export const dotLoadingToggler: StoryObj<typeof Toggler> = {
  args: {
    checked: true,
    labels: ["DotLoading Off", "DotLoading On"],
  },
};

export const disabledToggler: StoryObj<typeof Toggler> = {
  args: {
    disabled: true,
  },
};
