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
      exclude: [
        ...coverageConfigDefaults.exclude,
        'out/*',
        'next.config.js',
        'postcss.config.js',
        'tailwind.config.ts',
        'vite.config.ts',
      ],
      thresholds: {
        statements: 96.85,
        branches: 97.56,
        functions: 95,
        lines: 96.85,
      },
    },
  },
});
