import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/Header';
import content from '@/content/index.json';
import { describe, expect, it } from 'vitest';

describe('Header', () => {
  it('renders the company name', () => {
    render(<Header />);
    expect(screen.getByText(content.company.name)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    content.navigation.items.forEach(item => {
      expect(screen.getByTestId(item.title)).toBeInTheDocument();
    });
  });

  it('toggles the mobile menu', () => {
    render(<Header />);
    const toggleButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(toggleButton);
    expect(screen.getByLabelText('Mobile navigation')).toHaveClass('block');
    fireEvent.click(toggleButton);
    expect(screen.getByLabelText('Mobile navigation')).toHaveClass('hidden');
  });

  it('closes the mobile menu when a link is clicked', () => {
    render(<Header />);
    const toggleButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(toggleButton);
    const firstLink = screen.getAllByText(content.navigation.items[0].title)[0];
    fireEvent.click(firstLink);
    expect(screen.getByLabelText('Mobile navigation')).toHaveClass('md:hidden block');
  });
});
