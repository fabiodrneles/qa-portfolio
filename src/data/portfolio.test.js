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
});
