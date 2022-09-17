import type { Meta, StoryObj } from "@storybook/react";

import { ArrowRight } from "../../assets/images";
import { SvgIcon, type SvgIconProps } from "./index";

export default {
  title: "디자인시스템/컴포넌트/SvgIcon",
  component: SvgIcon,
  args: {
    icon: ArrowRight,
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
