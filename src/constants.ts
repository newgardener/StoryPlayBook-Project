import * as React from "react";

import { Shark } from "./design-system/assets/images";
import {
  AccordionCard,
  Badge,
  Button,
  ButtonGroup,
  Chip,
  DotLoading,
  FoldingMotion,
  JSONInputBox,
  ProductList,
  Toggler,
  Typography,
} from "./design-system/components";
import { BUTTON_GROUP, BUTTON_SIZE } from "./design-system/components/Button/types";
import { InputType } from "./types";

export const componentList: string[] = [
  "Typography",
  "Badge",
  "Button",
  "ButtonGroup",
  "Chip",
  "Toggler",
  "JSONInputBox",
  "DotLoading",
  "FoldingMotion",
  "AccordionCard",
  "ProductList",
];

export const defaultComponentProps: Record<string, object> = {
  Typography: { tag: "p", fontSize: 24, weight: "bold" } as React.ComponentProps<
    typeof Typography
  >,
  Badge: {
    type: "count",
    count: 85,
    visible: true,
    children: "뱃지 테스트 텍스트",
  } as React.ComponentProps<typeof Badge>,
  Button: { children: "테스트 버튼", size: BUTTON_SIZE.MEDIUM } as React.ComponentProps<
    typeof Button
  >,
  ButtonGroup: {
    buttonGroupType: BUTTON_GROUP.STACKED,
    buttonSize: BUTTON_SIZE.MEDIUM,
  } as React.ComponentProps<typeof ButtonGroup>,
  Chip: { label: "테스트용 촉촉한 쿠키칩" } as React.ComponentProps<typeof Chip>,
  Toggler: {} as React.ComponentProps<typeof Toggler>,
  JSONInputBox: {
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
  } as React.ComponentProps<typeof JSONInputBox>,
  DotLoading: { animation: "DOT_FLASHING" } as React.ComponentProps<typeof DotLoading>,
  FoldingMotion: {
    title: "FoldingMotion 제목",
    content: "FoldingMotion 컨텐츠",
  } as React.ComponentProps<typeof FoldingMotion>,
  AccordionCard: {
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
    showLimit: 1,
  } as React.ComponentProps<typeof AccordionCard>,
  ProductList: {
    title: "베럴아이에 대해 알아보기",
    subtitle: "우리들의 친구",
    products: [
      {
        productId: 1,
        priority: 1,
        name: "베럴아이 무드등",
        description: "베럴아이 무드등은 잠을 잘 때 키고 자기 좋은 무드등입니다.",
        icon: Shark,
        backgroundColor: "rgba(28, 213, 255, 0.1)",
        badgeStatus: "NONE",
      },
      {
        productId: 2,
        priority: 2,
        name: "베럴아이 잠옷세트\n남녀노소 입기 좋은 아이템",
        icon: Shark,
        backgroundColor: "rgba(175, 82, 222, 0.1)",
        badgeStatus: "NONE",
      },
    ],
  } as React.ComponentProps<typeof ProductList>,
};

export const componentPropsTypeMap: Record<string, object> = {
  Typography: {
    color: [InputType.TEXT, "#191c20"],
    weight: [InputType.RADIO, ["bold", "regular"]],
    fontSize: [InputType.NUMBER, 24],
    lineHeight: [InputType.NUMBER, 20],
    tag: [
      InputType.RADIO,
      ["h1", "h2", "h3", "h4", "h5", "p", "div", "span", "strong", "b"],
    ],
    children: [InputType.TEXT, "테스트용 Typography"],
  },
  Badge: {
    type: [InputType.RADIO, ["count", "label"]],
    count: [InputType.NUMBER, 85],
    label: [InputType.TEXT, ""],
    labelColor: [InputType.RADIO, ["red", "blue", "gray"]],
    size: [InputType.RADIO, ["small", "large"]],
    children: [InputType.TEXT, "뱃지 테스트 텍스트"],
  },
  Button: {
    size: [InputType.RADIO, ["large", "medium", "small"]],
    backgroundColor: [InputType.TEXT, "#568203"],
    textColor: [InputType.RADIO, ["white", "black"]],
    textBolded: [InputType.TOGGLE, false],
    isLoading: [InputType.TOGGLE, false],
    children: [InputType.TEXT, "테스트 버튼"],
  },
  ButtonGroup: {
    buttonGroupType: [InputType.RADIO, ["1:1", "stacked"]],
    buttonSize: [InputType.RADIO, ["large", "medium", "small"]],
  },
  Chip: {
    active: [InputType.TOGGLE, false],
    label: [InputType.TEXT, "테스트용 촉촉한 쿠키칩"],
  },
  Toggler: {
    checked: [InputType.TOGGLE, false],
  },
  JSONInputBox: {
    propsName: [InputType.TEXT, "contents"],
    defaultData: [
      InputType.JSON,
      [
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
    ],
  },
  DotLoading: {
    animation: [InputType.RADIO, ["DOT_ELASTIC", "DOT_FLASHING", "DOT_TYPING"]],
  },
  FoldingMotion: {
    title: [InputType.TEXT, "FoldingMotion 제목"],
    content: [InputType.TEXT, "FoldingMotion 컨텐츠"],
  },
  AccordionCard: {
    title: [InputType.TEXT, "테스트 아코디언 컴포넌트"],
    subtitle: [InputType.TEXT, "서브 아코디언"],
    contents: [
      InputType.JSON,
      [
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
    ],
    showLimit: [InputType.NUMBER, 1],
  },
  ProductList: {
    title: [InputType.TEXT, "베럴아이에 대해 알아보기"],
    subtitle: [InputType.TEXT, "우리들의 친구"],
    products: [
      InputType.JSON,
      [
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
    ],
  },
};
