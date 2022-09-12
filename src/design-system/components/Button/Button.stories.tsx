import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { BUTTON_SIZE } from "./types";

export default {
  title: "디자인시스템/컴포넌트/Button",
  component: Button,
  args: {
    children: "신정원버튼테스트",
  },
} as Meta<typeof Button>;

export const 버튼_LARGE: StoryObj<typeof Button> = {
  args: {
    size: BUTTON_SIZE.LARGE,
  },
};

export const 버튼_MEDIUM: StoryObj<typeof Button> = {
  args: {
    size: BUTTON_SIZE.MEDIUM,
  },
};

export const 버튼_SMALL: StoryObj<typeof Button> = {
  args: {
    size: BUTTON_SIZE.SMALL,
  },
};
