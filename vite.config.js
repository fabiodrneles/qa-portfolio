import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 003 FR-1: the page title and description also come from portfolio.json.
const siteMeta = () => ({
  name: 'site-meta',
  transformIndexHtml(html) {
    const { site } = JSON.parse(readFileSync('src/data/portfolio.json', 'utf8'));
    const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    return html
      .replace(/<title>.*<\/title>/, `<title>${escape(site.title)}</title>`)
      .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${escape(site.description)}"`);
  },
});

export default defineConfig({
  plugins: [react(), siteMeta()],
  test: {
    include: ['src/**/*.test.{js,jsx}'],
    environment: 'jsdom',
    setupFiles: ['src/setupTests.js'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/**/*.test.{js,jsx}', 'src/setupTests.js', 'src/index.jsx'],
      reporter: ['text-summary', 'html'],
      // 002 FR-1: the build fails below 80% line coverage.
      thresholds: { lines: 80 },
    },
  },
});
