import { render, screen } from '@testing-library/react';
import ServicesPage from '@/app/services/page';
import content from '@/content/index.json';
import { describe, expect, it } from 'vitest';

describe('ServicesPage', () => {
  it('renders the page header', () => {
    render(<ServicesPage />);

    // Check if the page title is rendered
    expect(screen.getByText(content.services.page.title)).toBeInTheDocument();

    // Check if the page description is rendered
    expect(screen.getByText(content.services.page.description)).toBeInTheDocument();
  });

  it('renders all feature sections', () => {
    render(<ServicesPage />);

    // Check if all feature section titles and features are rendered
    content.services.items.forEach(section => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
      section.features.forEach(feature => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });
    });
  });
});
