import { atom } from "recoil";

export const playgroundState = atom<"test" | "story">({
  key: "playground",
  default: "test",
});
