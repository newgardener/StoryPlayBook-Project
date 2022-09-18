import type { Meta, StoryObj } from "@storybook/react";

import { type TypographyProps,Typography } from "./index";

export default {
  title: "디자인시스템/컴포넌트/Typography",
  component: Typography,
} as Meta<TypographyProps>;

export const default_24: StoryObj<TypographyProps> = {
  args: {
    tag: "p",
    children: "테스트용 Typography",
    fontSize: 24,
  },
};

export const default_24_bolded: StoryObj<TypographyProps> = {
  args: {
    tag: "p",
    children: "테스트용 Typography",
    fontSize: 24,
    weight: "bold",
  },
};

export const default_24_colored: StoryObj<TypographyProps> = {
  args: {
    tag: "p",
    children: "테스트용 Typography",
    fontSize: 24,
    weight: "bold",
    color: "#0F52BA",
  },
};

export const default_16: StoryObj<TypographyProps> = {
  args: {
    tag: "p",
    children: "테스트용 Typography",
    fontSize: 16,
  },
};

export const default_16_bolded: StoryObj<TypographyProps> = {
  args: {
    tag: "p",
    children: "테스트용 Typography",
    fontSize: 16,
    weight: "bold",
  },
};

export const default_16_colored: StoryObj<TypographyProps> = {
  args: {
    tag: "p",
    children: "테스트용 Typography",
    fontSize: 16,
    weight: "bold",
    color: "#0F52BA",
  },
};
