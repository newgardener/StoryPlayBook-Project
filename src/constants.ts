import { Shark } from "./design-system/assets/images";
import { BUTTON_GROUP, BUTTON_SIZE } from "./design-system/components/Button/types";

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
  Typography: { tag: "p", fontSize: 24, weight: "bold" },
  Badge: { type: "count", count: 85, visible: true, children: "뱃지 테스트 텍스트" },
  Button: { children: "테스트 버튼", size: BUTTON_SIZE.MEDIUM },
  ButtonGroup: { buttonGroupType: BUTTON_GROUP.STACKED, buttonSize: BUTTON_SIZE.MEDIUM },
  Chip: { label: "테스트용 촉촉한 쿠키칩" },
  Toggler: {},
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
  },
  DotLoading: { animation: "DOT_FLASHING" },
  FoldingMotion: { title: "FoldingMotion 제목", content: "FoldingMotion 컨텐츠" },
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
  },
  ProductList: {
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
};
