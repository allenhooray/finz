import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';
import { loadConfigFromFile, mergeConfig } from "vite";

const config: StorybookConfig = {
  "stories": [
    "../src/stories/*.mdx",
    "../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "storybook-addon-vue-slots"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },

  async viteFinal(config, { configType }) {
    const { config: userConfig } = (await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    ))!;

    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [],
    });
  },
};
export default config;