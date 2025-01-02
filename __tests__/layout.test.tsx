import { render, screen, waitFor } from '@testing-library/react';
import RootLayout from '../app/layout';
import { describe, expect, it, vi } from 'vitest';

vi.mock('next/font/google', () => ({
  Inter: () => ({ className: 'mocked-inter-font' }),
}));

describe('RootLayout', () => {
  it('renders the header, footer, and children', async () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>,
    );

    // Check if the header is rendered
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Check if the children are rendered
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    // Check if the footer is rendered
    await waitFor(() => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });
});
