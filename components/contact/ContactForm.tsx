'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import content from '@/content/index.json';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { fields, buttons } = content.contact.form;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic would go here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          {fields.name}
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1"
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {fields.email}
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1"
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          {fields.message}
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1"
          aria-required="true"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700" 
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
      >
        {isSubmitting ? buttons.submitting : buttons.submit}
      </Button>
    </form>
  );
}