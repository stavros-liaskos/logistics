import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import content from '@/content/index.json';
import Link from 'next/link';
import ServiceCard from '@/components/services/ServiceCard';
import { serviceIcons } from '@/lib/icons';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Logistics Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{content.home.hero.title}</h1>
              <p className="mt-6 text-xl text-gray-300">{content.home.hero.description}</p>
              <div className="mt-10">
                <Link href={content.home.hero.button.href}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    {content.home.hero.button.text} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="my-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {content.home.features.title && (
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {content.home.features.title}
              </h2>
            )}
            <p className="mt-4 text-lg text-gray-600">{content.home.features.description}</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {content.home.features.items.map((feature, key) => {
              const IconComponent = serviceIcons[feature.icon as keyof typeof serviceIcons];

              return (
                <div key={key} className="text-center">
                  <div className="mx-auto h-12 w-12 text-blue-600">
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-4 text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.home.summary.items.map((summaryItem, key) => (
              <ServiceCard
                key={key}
                {...summaryItem}
                icon={serviceIcons[summaryItem.icon as keyof typeof serviceIcons]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
