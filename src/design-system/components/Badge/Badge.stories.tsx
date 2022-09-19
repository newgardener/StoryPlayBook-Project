import type { Meta, StoryObj } from "@storybook/react";

import { type BadgeProps,Badge } from "./index";

export default {
  title: "디자인시스템/컴포넌트/Badge",
  component: Badge,
} as Meta<BadgeProps>;

export const count_100_이상_타입: StoryObj<BadgeProps> = {
  args: {
    type: "count",
    count: 100,
    labelColor: "red",
    visible: true,
    children: "텍스트",
  },
};

export const count_99_이하_타입: StoryObj<BadgeProps> = {
  args: {
    type: "count",
    count: 85,
    labelColor: "red",
    visible: true,
    children: "텍스트",
  },
};

export const label_small_타입: StoryObj<BadgeProps> = {
  args: {
    type: "label",
    label: "신정원 테스트 라벨입니다.",
    labelColor: "red",
    size: "small",
    visible: true,
  },
};

export const label_large_타입: StoryObj<BadgeProps> = {
  args: {
    type: "label",
    label: "신정원 테스트 라벨입니다.",
    labelColor: "red",
    size: "large",
    visible: true,
  },
};

export const label_with_children: StoryObj<BadgeProps> = {
  args: {
    type: "label",
    label: "신정원 테스트 라벨입니다.",
    labelColor: "red",
    size: "large",
    visible: true,
    children: "텍스트",
  },
};
