import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Summary from '@/components/home/Summary';
import content from '@/content/index.json';

describe('Summary', () => {
  it('renders the Summary section', () => {
    render(<Summary />);

    const summaryItems = content.home.summary.items;
    summaryItems.forEach(item => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('renders the correct number of ServiceCard components', () => {
    render(<Summary />);

    const summaryItems = content.home.summary.items;
    const serviceCards = screen.getAllByTestId('service-card');
    expect(serviceCards.length).toBe(summaryItems.length);
  });
});
