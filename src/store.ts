import { atom } from "recoil";

import { defaultComponentProps } from "./constants";

export const playgroundState = atom<"test" | "story">({
  key: "playground",
  default: "test",
});

export const componentPropsState = atom<Record<string, object>>({
  key: "componentProps",
  default: defaultComponentProps,
});

export const storyPlaygroundFormState = atom({
  key: "storyPlaygroundForm",
  default: {
    Typography: false,
    Badge: false,
    Button: false,
    Chip: false,
    Toggler: false,
    FoldingMotion: false,
    AccordionCard: false,
    ProductList: false,
  },
});
