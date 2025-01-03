import { vi, describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '@/components/contact/ContactForm';
import content from '@/content/index.json';

vi.mock('@/hooks/useReCaptcha', () => {
  return {
    default: () => ({
      captchaToken: 'successful-token',
      recaptchaRef: { current: null },
      handleRecaptcha: vi.fn(),
    }),
  };
});

// vi.mock('@emailjs/browser', () => {
//   return {
//     default: () => ({
//       send: vi.fn(),
//     }),
//     send: vi.fn(),
//   };
// });

describe('ContactForm', () => {
  const user = userEvent.setup();
  const { fields, buttons, validations } = content.contact.form;

  it('renders form fields', async () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(fields.name)).toBeInTheDocument();
    expect(screen.getByLabelText(fields.email)).toBeInTheDocument();
    expect(screen.getByLabelText(fields.message)).toBeInTheDocument();
    expect(screen.getByTestId('recaptcha')).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(fields.name);
    const emailInput = screen.getByLabelText(fields.email);
    const messageInput = screen.getByLabelText(fields.message);
    const submitButton = screen.getByRole('button', { name: buttons.submit });

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'too small msg');

    await user.click(submitButton);
    expect(submitButton).toBeDisabled();
    expect(screen.getByText(validations.message.minLength)).toBeInTheDocument();

    await user.type(messageInput, 'Big enough message to pass validation');

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      expect(screen.getByText(content => content.startsWith(buttons.submit))).toBeInTheDocument();
    });
  });

  it('requires all fields', async () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: buttons.submit });
    await user.click(submitButton);

    expect(screen.getByText(validations.name.required)).toBeInTheDocument();
    expect(screen.getByText(validations.email.required)).toBeInTheDocument();
    expect(screen.getByText(validations.message.required)).toBeInTheDocument();
  });

  it('shows error notification on failed submission', async () => {
    const { title, description } = content.contact.notification.error;
    const user = userEvent.setup();
    render(<ContactForm />);

    // Fill out the form
    await user.type(screen.getByLabelText(fields.name), 'Test User');
    await user.type(screen.getByLabelText(fields.email), 'test@example.com');
    await user.type(screen.getByLabelText(fields.message), 'Big enough message to pass validation');

    // Submit the form
    const submitButton = screen.getByRole('button', { name: buttons.submit });
    await user.click(submitButton);

    // Verify error notification (api call fails)
    await waitFor(() => {
      const notification = screen.getByRole('alert');
      expect(notification).toHaveTextContent(`${title} ${description}`);
      expect(notification).toHaveClass('bg-red-50', 'text-red-800');
    });

    // Verify notification disappears
    await waitFor(
      () => {
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      },
      { timeout: 7000 },
    );
  }, 7000);
});
