import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, test } from 'vitest';

const tracked = execSync('git ls-files', { encoding: 'utf8' }).split('\n').filter(Boolean);

describe('repository hygiene', () => {
  test('001 AC-3: no .exe is tracked', () => {
    expect(tracked.filter((f) => f.endsWith('.exe'))).toEqual([]);
  });

  test('001 AC-3: JSX uses className, never class=', () => {
    const offenders = tracked
      .filter((f) => /^src\/.*\.(js|jsx)$/.test(f) && existsSync(f))
      .filter((f) => /<[a-zA-Z][^>]*\sclass=/.test(readFileSync(f, 'utf8')));
    expect(offenders).toEqual([]);
  });
});

describe('build and deploy config', () => {
  test('001 AC-2: vercel.json rewrites every route to /index.html', () => {
    const cfg = JSON.parse(readFileSync('vercel.json', 'utf8'));
    expect(cfg.rewrites).toContainEqual({ source: '/(.*)', destination: '/index.html' });
  });

  test('001 AC-1: the build uses Vite and react-scripts is gone', () => {
    const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
    expect(pkg.scripts.build).toBe('vite build');
    expect({ ...pkg.dependencies, ...pkg.devDependencies }).not.toHaveProperty('react-scripts');
  });
});
