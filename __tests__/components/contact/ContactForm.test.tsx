import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '@/components/contact/ContactForm';

describe('ContactForm', () => {
  const user = userEvent.setup();

  it('renders form fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Όνομα/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Μήνυμα/i)).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/Όνομα/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/Μήνυμα/i);
    const submitButton = screen.getByRole('button');

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Test message');

    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(screen.getByText(/Αποστολή/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      expect(screen.getByText(/Αποστολή Μηνύματος/i)).toBeInTheDocument();
    });
  });

  it('requires all fields', async () => {
    render(<ContactForm />);

    const form = screen.getByRole('form');
    await user.click(screen.getByRole('button'));

    expect(form).toBeInvalid();
  });
});
