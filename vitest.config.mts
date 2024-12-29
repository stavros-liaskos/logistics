import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
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
        statements: 100,
        branches: 100,
        functions: 92.3,
        lines: 100,
      },
    },
  },
});
