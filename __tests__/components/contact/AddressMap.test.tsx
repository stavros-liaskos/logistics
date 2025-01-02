import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AddressMap from '@/components/contact/AddressMap';

describe('AddressMap', () => {
  it('renders the AddressMap component', () => {
    render(<AddressMap />);

    const iframe = screen.getByTitle('Google Maps');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', expect.stringContaining('https://www.google.com/maps/embed'));
    expect(iframe).toHaveAttribute('width', '800');
    expect(iframe).toHaveAttribute('height', '550');
    expect(iframe).toHaveAttribute('loading', 'lazy');
    expect(iframe).toHaveAttribute('referrerPolicy', 'no-referrer-when-downgrade');
  });
});
