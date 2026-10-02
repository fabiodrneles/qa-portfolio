// 001 AC-3: no binaries are versioned and no JSX uses `class=`.
const { execSync } = require('child_process');
const fs = require('fs');

const tracked = execSync('git ls-files', { encoding: 'utf8' }).split('\n').filter(Boolean);

test('001 AC-3: no .exe is tracked', () => {
  expect(tracked.filter((f) => f.endsWith('.exe'))).toEqual([]);
});

test('001 AC-3: JSX uses className, never class=', () => {
  const offenders = tracked
    .filter((f) => /^src\/.*\.(js|jsx)$/.test(f) && fs.existsSync(f))
    .filter((f) => /<[a-zA-Z][^>]*\sclass=/.test(fs.readFileSync(f, 'utf8')));
  expect(offenders).toEqual([]);
});
