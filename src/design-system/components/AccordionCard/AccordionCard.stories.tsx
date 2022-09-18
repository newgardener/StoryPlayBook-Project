import type { Meta, StoryObj } from "@storybook/react";

import { AccordionCard } from "./index";

export default {
  title: "디자인시스템/컴포넌트/AccordionCard",
  component: AccordionCard,
  args: {
    title: "테스트 아코디언 컴포넌트",
    subtitle: "서브 아코디언",
    contents: [
      {
        name: "베럴아이",
        description: "베럴아이는 해저 깊은 곳에 사는 특이한 물고기이다.",
      },
      {
        name: "범고래",
        description:
          "범고래는 해양식물 중의 깡패라고 불리울만큼 특유의 사나운 성격으로 유명한 표유류이다.",
      },
    ],
  },
} as Meta<typeof AccordionCard>;

export const ShowLimit이_없음: StoryObj<typeof AccordionCard> = {};

export const ShowLimit이_있음: StoryObj<typeof AccordionCard> = {
  args: {
    showLimit: 1,
  },
};
