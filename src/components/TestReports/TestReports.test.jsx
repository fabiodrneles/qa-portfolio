import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { testReports } from '../../data/testData';
import TestReports from './TestReports';

describe('TestReports', () => {
  test('002 AC-1: renders one card per report', () => {
    render(<TestReports />);
    for (const report of testReports) {
      expect(screen.getByText(report.projectName)).toBeInTheDocument();
    }
  });
});
