import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import Portfolio from './Portfolio';

describe('Portfolio tabs', () => {
  test('002 AC-1: switches between reports, scenarios and metrics', async () => {
    render(<Portfolio />);
    expect(screen.getByRole('heading', { level: 2, name: /Relatórios de Teste/ })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Cenários de Teste' }));
    expect(screen.getByRole('heading', { level: 2, name: /Cenários de Teste/ })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Métricas e KPIs' }));
    expect(screen.getByRole('heading', { level: 2, name: /Métricas de Qualidade/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Métricas e KPIs' })).toHaveClass('active');
  });
});
