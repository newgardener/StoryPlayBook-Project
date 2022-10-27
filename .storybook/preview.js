import "../src/design-system/assets/styles/reset.scss";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  layout: "fullscreen",
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphonex",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
  docs: {
    source: {
      type: "code",
    },
  },
};
