import { render, screen } from '@testing-library/react';
import ServicesPage from '@/app/services/page';
import content from '@/content/index.json';

describe('ServicesPage', () => {
  it('renders page header', () => {
    render(<ServicesPage />);
    
    expect(screen.getByText(content.services.page.title)).toBeInTheDocument();
    expect(screen.getByText(content.services.page.description)).toBeInTheDocument();
  });

  it('renders all service cards', () => {
    render(<ServicesPage />);
    
    content.services.items.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });
});