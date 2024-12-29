import { render, screen } from '@testing-library/react';
import ContactPage from '@/app/contact/page';
import content from '@/content/index.json';

describe('ContactPage', () => {
  it('renders page header', () => {
    render(<ContactPage />);

    expect(screen.getByText(content.contact.page.title)).toBeInTheDocument();
    expect(screen.getByText(content.contact.page.description)).toBeInTheDocument();
  });

  it('renders contact form section', () => {
    render(<ContactPage />);

    expect(screen.getByText(content.contact.form.title)).toBeInTheDocument();
    expect(screen.getByText(content.contact.form.description)).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<ContactPage />);

    content.contact.info.sections.forEach(section => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
      section.details.forEach(detail => {
        expect(screen.getByText(detail)).toBeInTheDocument();
      });
    });
  });
});
