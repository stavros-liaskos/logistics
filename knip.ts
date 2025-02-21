import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['vitest.config.mts'],
  ignoreUnresolved: ['@typescript-eslint/eslint-plugin', '@next/eslint-plugin-next/recommended'],
};

export default config;
