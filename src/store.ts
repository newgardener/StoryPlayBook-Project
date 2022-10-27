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
