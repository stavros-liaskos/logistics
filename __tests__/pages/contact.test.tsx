import { render, screen } from '@testing-library/react';
import ContactPage from '@/app/contact/page';
import content from '@/content/index.json';
import { describe, expect, it } from 'vitest';

describe('ContactPage', () => {
  it('renders the page header', () => {
    render(<ContactPage />);

    // Check if the page title is rendered
    expect(screen.getByText(content.contact.page.title)).toBeInTheDocument();

    // Check if the page description is rendered
    expect(screen.getByText(content.contact.page.description)).toBeInTheDocument();
  });

  it('renders the map section', () => {
    render(<ContactPage />);

    // Check if the map title is rendered
    expect(screen.getByText(content.contact.map.title)).toBeInTheDocument();

    // Check if the map description is rendered
    expect(screen.getByText(content.contact.map.description)).toBeInTheDocument();
  });

  it('renders the contact information section', () => {
    render(<ContactPage />);

    // Check if the contact information title is rendered
    expect(screen.getByText(content.contact.info.title)).toBeInTheDocument();

    // Check if all contact information sections are rendered
    content.contact.info.sections.forEach(section => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
      section.details.forEach(detail => {
        expect(screen.getByText(detail)).toBeInTheDocument();
      });
    });
  });
});
