import type { Meta, StoryObj } from "@storybook/react";

import { Shark } from "../../assets/images";

import { ProductList } from "./index";

export default {
  title: "디자인시스템/컴포넌트/ProductList",
  component: ProductList,
  args: {
    title: "베럴아이에 대해 알아보기",
    subtitle: "우리들의 친구",
    products: [
      {
        productId: 1,
        priority: 1,
        name: "베럴아이 무드등",
        description: "베럴아이 무드등은 잠을 잘 때 키고 자기 좋은 무드등입니다.",
        image: {
          defaultImage: {
            icon: Shark,
            backgroundColor: "rgba(28, 213, 255, 0.1)",
          },
        },
        badgeStatus: "NONE",
      },
      {
        productId: 2,
        priority: 2,
        name: "베럴아이 잠옷세트\n남녀노소 입기 좋은 아이템",
        image: {
          defaultImage: {
            icon: Shark,
            backgroundColor: "rgba(175, 82, 222, 0.1)",
          },
        },
        badgeStatus: "NONE",
      },
    ],
  },
} as Meta<typeof ProductList>;

export const 카드타입: StoryObj<typeof ProductList> = {
  args: {
    isCardType: true,
  },
};

export const 카트타입_아님: StoryObj<typeof ProductList> = {
  args: {
    isCardType: false,
  },
};
