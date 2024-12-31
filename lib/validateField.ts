import { validateEmail, validateMessage, validateName } from '@/lib/validation';
import content from '@/content/index.json';

const { validations } = content.contact.form;

export default function validateField(name: string, value: string): string | undefined {
  switch (name) {
    case 'name':
      return !value
        ? validations.name.required
        : !validateName(value)
          ? validations.name.format
          : value.length < 3
            ? validations.name.minLength
            : undefined;
    case 'email':
      return !value
        ? validations.email.required
        : !validateEmail(value)
          ? validations.email.format
          : value.length < 6
            ? validations.email.minLength
            : undefined;
    case 'message':
      return !value
        ? validations.message.required
        : !validateMessage(value)
          ? validations.message.minLength
          : undefined;
    default:
      return undefined;
  }
}
