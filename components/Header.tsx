'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Truck } from 'lucide-react';
import { cn } from '@/lib/utils';
import content from '@/content/index.json';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" aria-label={`${content.company.name} Aρχική`}>
              <Truck className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <span className="text-xl font-bold text-gray-900">{content.company.name}</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {content.navigation.items.map(item => (
              <Link
                key={item.title}
                href={item.href}
                className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg
              className={cn('h-6 w-6', isOpen ? 'hidden' : 'block')}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={cn('h-6 w-6', isOpen ? 'block' : 'hidden')}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div id="mobile-menu" className={cn('md:hidden', isOpen ? 'block' : 'hidden')} aria-label="Mobile navigation">
          <div className="space-y-1 pb-3 pt-2">
            {content.navigation.items.map(item => (
              <Link
                key={item.title}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
