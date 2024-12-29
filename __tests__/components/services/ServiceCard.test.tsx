import { render, screen } from '@testing-library/react';
import ServiceCard from '@/components/services/ServiceCard';
import { Truck } from 'lucide-react';

describe('ServiceCard', () => {
  const props = {
    title: 'Transportation',
    description: 'Test service description',
    icon: Truck,
  };

  it('renders service information', () => {
    render(<ServiceCard {...props} />);
    
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it('renders the icon', () => {
    const { container } = render(<ServiceCard {...props} />);
    
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies hover effects', () => {
    const { container } = render(<ServiceCard {...props} />);
    
    expect(container.firstChild).toHaveClass('hover:shadow-lg');
  });
});