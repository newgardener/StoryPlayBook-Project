import type { Meta, StoryObj } from "@storybook/react";

import { JSONInputBox } from "./index";

export default {
  title: "디자인시스템/컴포넌트/JSONInputBox",
  component: JSONInputBox,
} as Meta<typeof JSONInputBox>;

export const JSON_기본형: StoryObj<typeof JSONInputBox> = {
  args: {
    propsName: "contents",
    defaultData: {
      name: "베럴아이",
      description: "베럴아이 is a deep sea creature",
    },
  },
};

export const JSON_배열형: StoryObj<typeof JSONInputBox> = {
  args: {
    propsName: "contents",
    defaultData: [
      {
        productId: 1,
        priority: 1,
        name: "베럴아이 무드등",
        description: "베럴아이 무드등은 잠을 잘 때 키고 자기 좋은 무드등입니다.",
        backgroundColor: "rgba(28, 213, 255, 0.1)",
        badgeStatus: "NONE",
      },
      {
        productId: 2,
        priority: 2,
        name: "베럴아이 잠옷세트\n남녀노소 입기 좋은 아이템",
        backgroundColor: "rgba(175, 82, 222, 0.1)",
        badgeStatus: "NONE",
      },
    ],
  },
};
