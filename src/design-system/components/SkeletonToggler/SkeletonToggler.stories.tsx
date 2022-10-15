import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../Skeleton";
import { SkeletonToggler } from "./index";

export default {
  title: "디자인시스템/컴포넌트/SkeletonToggler",
  component: SkeletonToggler,
  args: {
    showSkeleton: false,
    skeleton: <Skeleton width="100%" height="50px" />,
    children: (
      <div style={{ width: "100%", height: "50px", border: "1px solid" }}>
        I am children
      </div>
    ),
  },
} as Meta<typeof SkeletonToggler>;

export const 기본: StoryObj<typeof SkeletonToggler> = {};
