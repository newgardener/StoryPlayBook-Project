import type { Meta, StoryObj } from "@storybook/react";

import { ArrowDown } from "../../assets/images";
import { SvgIcon } from "../SvgIcon";

import { Button } from "./Button";
import { BUTTON_SIZE } from "./types";

export default {
  title: "디자인시스템/컴포넌트/Button",
  component: Button,
} as Meta<typeof Button>;

export const 버튼_LARGE: StoryObj<typeof Button> = {
  args: {
    children: "신정원버튼테스트",
    size: BUTTON_SIZE.LARGE,
  },
};

export const 버튼_MEDIUM: StoryObj<typeof Button> = {
  args: {
    children: "신정원버튼테스트",
    size: BUTTON_SIZE.MEDIUM,
  },
};

export const 버튼_SMALL: StoryObj<typeof Button> = {
  args: {
    children: "신정원버튼테스트",
    size: BUTTON_SIZE.SMALL,
  },
};

export const 버튼_ICON_WITH_CHILDREN: StoryObj<typeof Button> = {
  args: {
    size: BUTTON_SIZE.MEDIUM,
    icon: <SvgIcon icon={ArrowDown} />,
    children: "신정원버튼테스트",
  },
};

export const 버튼_ICON_ONLY: StoryObj<typeof Button> = {
  args: {
    size: BUTTON_SIZE.MEDIUM,
    icon: <SvgIcon icon={ArrowDown} />,
  },
};
