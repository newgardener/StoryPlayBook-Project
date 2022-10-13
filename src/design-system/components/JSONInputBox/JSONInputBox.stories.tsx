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
        name: "베럴아이",
        description: "베럴아이 is a deep sea creature",
      },
      {
        name: "베럴아이2",
        description: "베럴아이2 is a deep sea creature",
      },
    ],
  },
};
