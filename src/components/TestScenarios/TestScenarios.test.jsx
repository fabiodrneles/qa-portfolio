import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { scenarios as testScenarios } from '../../data/portfolio';
import TestScenarios from './TestScenarios';

const titles = () => screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);

describe('TestScenarios filter', () => {
  test('002 AC-1: shows every scenario, then only the selected type', async () => {
    render(<TestScenarios />);
    expect(titles()).toEqual(testScenarios.map((s) => s.title));

    // Filter buttons, in order: all, functional, api, performance, security.
    const filters = screen.getAllByRole('button');
    const types = ['functional', 'api', 'performance', 'security'];
    for (const [i, type] of types.entries()) {
      await userEvent.click(filters[i + 1]);
      expect(filters[i + 1]).toHaveClass('active');
      expect(titles()).toEqual(testScenarios.filter((s) => s.type === type).map((s) => s.title));
    }

    await userEvent.click(filters[0]);
    expect(titles()).toHaveLength(testScenarios.length);
  });
});
