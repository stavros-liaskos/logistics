import { render, screen, waitFor } from '@testing-library/react';
import Home from '../app/page';
import content from '@/content/index.json';
import { describe, expect, it } from 'vitest';

describe('Home', () => {
  it('renders the hero section', async () => {
    render(<Home />);

    // Check if the hero title is rendered
    expect(screen.getByText(content.home.hero.title)).toBeInTheDocument();

    // Check if the hero description is rendered
    expect(screen.getByText(content.home.hero.description)).toBeInTheDocument();

    await waitFor(() => {
      // Check if the hero button is rendered
      expect(screen.getByText(content.home.hero.button.text)).toBeInTheDocument();
    });
  });

  it('renders the features section', () => {
    render(<Home />);

    // Check if the features title is rendered
    expect(screen.getByText(content.home.features.title)).toBeInTheDocument();

    // Check if the features description is rendered
    expect(screen.getByText(content.home.features.description)).toBeInTheDocument();

    // Check if all feature items are rendered
    content.home.features.items.forEach(feature => {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
      expect(screen.getByText(feature.description)).toBeInTheDocument();
    });
  });
});
