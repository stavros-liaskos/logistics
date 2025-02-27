'use client';

import React, { useState } from 'react';
import content from '@/content/index.json';
import emailjs from '@emailjs/browser';
import validateField from '@/lib/validateField';
import ReCAPTCHA from 'react-google-recaptcha';
import useRecaptcha from '@/hooks/useReCaptcha';
import { Loader } from 'lucide-react';
import type { TNotification } from '@/components/ui/notification';
import dynamic from 'next/dynamic';
import Button from '@/components/ui/button';
import Textarea from '@/components/ui/textarea';
import Input from '@/components/ui/input';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  reCaptcha?: string;
}
const Notification = dynamic(() => import('@/components/ui/notification'));

const initialFormData = {
  name: '',
  email: '',
  message: '',
  'g-recaptcha-response': '',
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const { captchaToken, recaptchaRef, handleRecaptcha } = useRecaptcha();
  const [showNotification, setShowNotification] = useState<TNotification>('hide');

  const { fields, buttons } = content.contact.form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    captchaToken &&
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          { ...formData, contact_number: Date.now(), 'g-recaptcha-response': captchaToken },
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
          },
        )
        .then(() => {
          /* v8 ignore next 2 */
          console.log('SUCCESS!');
          setShowNotification('success');
        })
        .catch(error => {
          console.error('FAILED...', error.text);
          setShowNotification('error');
        })
        .finally(() => {
          setErrors({});
          setIsSubmitting(false);
          setTimeout(() => {
            setFormData(initialFormData);
            setErrors({});
            setShowNotification('hide');
          }, 5000);
        });
  };

  return (
    <>
      <Notification show={showNotification} />
      <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            {fields.name}
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {fields.email}
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            {fields.message}
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`mt-1 ${errors.message ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500">
              {errors.message}
            </p>
          )}
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={handleRecaptcha}
          data-testid="recaptcha"
        />
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={isSubmitting || Object.values(errors).filter(Boolean).length > 0 || !captchaToken}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader className="animate-spin mr-2" /> {buttons.submitting}
            </>
          ) : (
            buttons.submit
          )}
        </Button>
      </form>
    </>
  );
}
