import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { loadEnv } from 'vite';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    env: loadEnv('test', process.cwd(), ''),
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      exclude: [
        ...coverageConfigDefaults.exclude,
        'out/*',
        'next.config.js',
        'postcss.config.js',
        'tailwind.config.ts',
        'vite.config.ts',
        'knip.ts',
      ],
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  },
});
