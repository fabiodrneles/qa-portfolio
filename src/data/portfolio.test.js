import { readFileSync } from 'node:fs';
import { describe, expect, test } from 'vitest';
import { validatePortfolio } from './validate';

const load = () => JSON.parse(readFileSync('src/data/portfolio.json', 'utf8'));

describe('portfolio.json', () => {
  test('003 AC-3: the committed file is valid', () => {
    expect(validatePortfolio(load())).toEqual([]);
  });

  test('003 AC-1: a missing required field is reported by its path', () => {
    const data = load();
    delete data.profile.name;
    delete data.home.skills[0].items;
    expect(validatePortfolio(data)).toEqual(['profile.name: obrigatório', 'home.skills[0].items: obrigatório']);
  });

  test('003 AC-1: wrong types and non-https URLs are rejected', () => {
    const data = load();
    data.contacts[0].url = 'http://example.com';
    data.about.methodologies[0].proficiency = '90';
    data.site = [];
    expect(validatePortfolio(data)).toEqual([
      'site: objeto esperado, veio array',
      'contacts[0].url: URL https esperada',
      'about.methodologies[0].proficiency: número esperado',
    ]);
  });

  test('003 AC-1: empty text is not accepted', () => {
    const data = load();
    data.profile.role = '  ';
    expect(validatePortfolio(data)).toEqual(['profile.role: texto não vazio esperado']);
  });

  test('003 AC-2: the distributed data fills every section and is marked as demo', () => {
    const data = load();
    expect(data.site.demo).toBe(true);
    const empty = [];
    const walk = (value, path) => {
      // Sections and their lists must have content; lists inside an item may be empty
      // (e.g. a planned project with no defects yet).
      if (Array.isArray(value)) {
        if (value.length === 0) empty.push(path);
      } else if (value && typeof value === 'object') {
        Object.entries(value).forEach(([k, v]) => walk(v, path ? `${path}.${k}` : k));
      }
    };
    walk(data, '');
    expect(empty).toEqual([]);
  });

  test('003 AC-2: demo contacts never point to a real profile', () => {
    for (const contact of load().contacts) {
      expect(new URL(contact.url).hostname).toBe('example.com');
    }
  });

  test('003 AC-1: site.demo must be a boolean', () => {
    const data = load();
    data.site.demo = 'sim';
    expect(validatePortfolio(data)).toEqual(['site.demo: true ou false esperado']);
  });
});
