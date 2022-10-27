import * as React from "react";

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

export const componentNameList: string[] = [
  "Typography",
  "Badge",
  "Button",
  "ButtonGroup",
  "Chip",
  "Toggler",
  "DotLoading",
  "FoldingMotion",
  "AccordionCard",
  "ProductList",
];

export const storyComponentNameList: (
  | "Typography"
  | "Badge"
  | "Button"
  | "Chip"
  | "Toggler"
  | "FoldingMotion"
  | "AccordionCard"
  | "ProductList"
)[] = [
  "Typography",
  "Badge",
  "Button",
  "Chip",
  "Toggler",
  "FoldingMotion",
  "AccordionCard",
  "ProductList",
];

export const defaultComponentProps: Record<string, object> = {
  Typography: {
    tag: "p",
    color: "#191c20",
    fontSize: 24,
    lineHeight: 20,
    weight: "bold",
    children: "테스트용 Typography",
  } as React.ComponentProps<typeof Typography>,
  Badge: {
    type: "count",
    count: 85,
    label: "",
    labelColor: "gray",
    size: "small",
    visible: true,
    children: "뱃지 테스트 텍스트",
  } as React.ComponentProps<typeof Badge>,
  Button: {
    size: BUTTON_SIZE.MEDIUM,
    backgroundColor: "#568203",
    textColor: "white",
    textBolded: false,
    isLoading: false,
    children: "테스트 버튼",
  } as React.ComponentProps<typeof Button>,
  ButtonGroup: {
    buttonGroupType: BUTTON_GROUP.STACKED,
    buttonSize: BUTTON_SIZE.MEDIUM,
  } as React.ComponentProps<typeof ButtonGroup>,
  Chip: {
    active: false,
    disabled: false,
    label: "테스트용 촉촉한 쿠키칩",
  } as React.ComponentProps<typeof Chip>,
  Toggler: { checked: true } as React.ComponentProps<typeof Toggler>,
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
  DotLoading: { animation: "dotFlashing" } as React.ComponentProps<typeof DotLoading>,
  FoldingMotion: {
    title: "제목입니다",
    content: "콘텐츠입니다",
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
    isCardType: false,
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
    visible: [InputType.TOGGLE, true],
    children: [InputType.TEXT, "뱃지 테스트 텍스트"],
  },
  Button: {
    size: [InputType.RADIO, [BUTTON_SIZE.LARGE, BUTTON_SIZE.MEDIUM, BUTTON_SIZE.SMALL]],
    backgroundColor: [InputType.TEXT, "#568203"],
    textColor: [InputType.RADIO, ["white", "black"]],
    textBolded: [InputType.TOGGLE, false],
    isLoading: [InputType.TOGGLE, false],
    children: [InputType.TEXT, "테스트 버튼"],
  },
  ButtonGroup: {
    buttonGroupType: [InputType.RADIO, [BUTTON_GROUP.ONE_TO_ONE, BUTTON_GROUP.STACKED]],
    buttonSize: [
      InputType.RADIO,
      [BUTTON_SIZE.LARGE, BUTTON_SIZE.MEDIUM, BUTTON_SIZE.SMALL],
    ],
  },
  Chip: {
    active: [InputType.TOGGLE, false],
    disabled: [InputType.TOGGLE, false],
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
    animation: [InputType.RADIO, ["dotElastic", "dotFlashing", "dotTyping"]],
  },
  FoldingMotion: {
    title: [InputType.TEXT, "FoldingMotion"],
    content: [InputType.TEXT, "FoldingMotion"],
  },
  AccordionCard: {
    title: [InputType.TEXT, "테스트 아코디언 컴포넌트"],
    subtitle: [InputType.TEXT, "서브 아코디언"],
    showLimit: [InputType.NUMBER, 1],
  },
  ProductList: {
    title: [InputType.TEXT, "베럴아이에 대해 알아보기"],
    subtitle: [InputType.TEXT, "우리들의 친구"],
    isCardType: [InputType.TOGGLE, false],
  },
};
