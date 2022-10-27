import type { Meta, StoryObj } from "@storybook/react";

import { ArrowDown, ArrowToggleDown } from "../../assets/images";

import { type SvgIconProps, SvgIcon } from "./index";

export default {
  title: "디자인시스템/컴포넌트/SvgIcon",
  component: SvgIcon,
  args: {
    icon: ArrowDown,
  },
} as Meta<SvgIconProps>;

export const 아이콘_red: StoryObj<SvgIconProps> = {
  args: {
    theme: "red",
  },
};

export const 아이콘_blue: StoryObj<SvgIconProps> = {
  args: {
    theme: "blue",
  },
};

export const 아이콘_white: StoryObj<SvgIconProps> = {
  args: {
    theme: "white",
  },
};

export const 아이콘_gray: StoryObj<SvgIconProps> = {
  args: {
    theme: "gray",
  },
};

export const 아이콘_disabled: StoryObj<SvgIconProps> = {
  args: {
    theme: "disabled",
  },
};

export const 아이콘_ArrowToggleDown: StoryObj<SvgIconProps> = {
  args: {
    icon: ArrowToggleDown,
    theme: "gray",
  },
};
