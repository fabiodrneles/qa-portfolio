import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import DemoNotice from './DemoNotice';

describe('DemoNotice', () => {
  test('003 AC-2: shows the demo notice when site.demo is true', () => {
    render(<DemoNotice show />);
    expect(screen.getByRole('note')).toHaveTextContent('Dados fictícios de demonstração');
  });

  test('003 AC-2: renders nothing when site.demo is false', () => {
    const { container } = render(<DemoNotice show={false} />);
    expect(container).toBeEmptyDOMElement();
  });
});
