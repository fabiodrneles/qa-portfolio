import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { reports as testReports } from '../../data/portfolio';
import TestReports from './TestReports';

describe('TestReports', () => {
  test('002 AC-1: renders one card per report', () => {
    render(<TestReports />);
    for (const report of testReports) {
      expect(screen.getByText(report.projectName)).toBeInTheDocument();
    }
  });

  test('002 AC-1: a report without defects says so', () => {
    render(<TestReports />);
    const withoutDefects = testReports.filter((r) => r.defects.length === 0);
    expect(screen.queryAllByText('Nenhum defeito registrado.')).toHaveLength(withoutDefects.length);
  });
});
