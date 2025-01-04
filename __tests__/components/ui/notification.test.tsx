import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Notification from '@/components/ui/notification';
import type { TNotification } from '@/components/ui/notification';
import content from '@/content/index.json';

describe('Notification', () => {
  const renderNotification = (show: TNotification) => {
    render(<Notification show={show} />);
  };

  it('does not render when show is "hide"', () => {
    renderNotification('hide');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('renders success notification', () => {
    renderNotification('success');
    const { title, description } = content.contact.notification.success;
    const alert = screen.getByRole('alert');

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('bg-green-50', 'text-green-800');
    expect(screen.getByText(`${title} ${description}`)).toBeInTheDocument();
  });

  it('renders error notification', () => {
    renderNotification('error');
    const { title, description } = content.contact.notification.error;
    const alert = screen.getByRole('alert');

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('bg-red-50', 'text-red-800');
    expect(screen.getByText(`${title} ${description}`)).toBeInTheDocument();
  });
});
