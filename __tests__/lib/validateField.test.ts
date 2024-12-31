import { describe, expect, it } from 'vitest';
import validateField from '@/lib/validateField';
import content from '@/content/index.json';

describe('validateField', () => {
  const { validations } = content.contact.form;

  describe('name field', () => {
    it('returns required validation message if name is empty', () => {
      expect(validateField('name', '')).toBe(validations.name.required);
    });

    it('returns format validation message if name is invalid', () => {
      expect(validateField('name', 'J1dx')).toBe(validations.name.format);
    });

    it('returns minLength validation message if name is too short', () => {
      expect(validateField('name', 'Jo')).toBe(validations.name.minLength);
    });

    it('returns undefined if name is valid', () => {
      expect(validateField('name', 'John Doe')).toBeUndefined();
    });
  });

  describe('email field', () => {
    it('returns required validation message if email is empty', () => {
      expect(validateField('email', '')).toBe(validations.email.required);
    });

    it('returns format validation message if email is invalid', () => {
      expect(validateField('email', 'john@')).toBe(validations.email.format);
    });

    it('returns minLength validation message if email is too short', () => {
      expect(validateField('email', 'a@b.c')).toBe(validations.email.minLength);
    });

    it('returns undefined if email is valid', () => {
      expect(validateField('email', 'john@example.com')).toBeUndefined();
    });
  });

  describe('message field', () => {
    it('returns required validation message if message is empty', () => {
      expect(validateField('message', '')).toBe(validations.message.required);
    });

    it('returns minLength validation message if message is too short', () => {
      expect(validateField('message', 'Hi')).toBe(validations.message.minLength);
    });

    it('returns undefined if message is valid', () => {
      expect(validateField('message', 'This is a valid message.')).toBeUndefined();
    });
  });

  describe('unknown field', () => {
    it('returns undefined for unknown field', () => {
      expect(validateField('unknown', 'value')).toBeUndefined();
    });
  });
});
