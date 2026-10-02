import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import App from './App';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

describe('App routes', () => {
  test.each([
    ['/', 'Quality Assurance Specialist'],
    ['/portfolio', 'Portfólio de Projetos'],
    ['/about', 'Sobre Mim'],
  ])('002 AC-1: %s renders its page title', (path, title) => {
    renderAt(path);
    expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument();
  });

  test('002 AC-1: the header marks the current page and navigates', async () => {
    renderAt('/');
    const nav = document.querySelector('header nav');
    expect(nav.querySelector('.active')).toHaveTextContent('Início');

    await userEvent.click(within(nav).getByRole('link', { name: 'Sobre' }));
    expect(screen.getByRole('heading', { level: 1, name: 'Sobre Mim' })).toBeInTheDocument();
    expect(nav.querySelector('.active')).toHaveTextContent('Sobre');
  });
});
