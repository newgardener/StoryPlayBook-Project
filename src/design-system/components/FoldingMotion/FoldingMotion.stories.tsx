import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../Typography";

import { FoldingMotion } from "./index";

export default {
  title: "디자인시스템/컴포넌트/FoldingMotion",
  component: FoldingMotion,
} as Meta<typeof FoldingMotion>;

export const content_text: StoryObj<typeof FoldingMotion> = {
  args: { title: "FoldingMotion 제목", content: "FoldingMotion 내용" },
};

export const content_node: StoryObj<typeof FoldingMotion> = {
  args: {
    title: "FoldingMotion 제목",
    content: (
      <Typography tag="p" fontSize={24}>
        신정원 child node
      </Typography>
    ),
  },
};
