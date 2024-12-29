import { render, screen } from '@testing-library/react';
import PageHeader from '@/components/PageHeader';

describe('PageHeader', () => {
  const props = {
    title: 'Test Title',
    description: 'Test Description',
  };

  it('renders title and description', () => {
    render(<PageHeader {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<PageHeader {...props} />);

    expect(container.firstChild).toHaveClass('bg-gray-50');
    expect(screen.getByText(props.title)).toHaveClass('text-4xl');
  });
});
