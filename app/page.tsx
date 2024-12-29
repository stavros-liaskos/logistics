import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Globe, Clock } from 'lucide-react';

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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Global Logistics Solutions for Your Business
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Streamline your supply chain with our comprehensive logistics services. We deliver efficiency, reliability, and innovation.
              </p>
              <div className="mt-10">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose LogiTech
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide end-to-end logistics solutions tailored to your needs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Package,
                title: 'Comprehensive Solutions',
                description: 'From warehousing to distribution, we handle every aspect of your logistics needs.',
              },
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Our worldwide network ensures your cargo reaches any destination efficiently.',
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Round-the-clock customer service to address your concerns anytime.',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto h-12 w-12 text-blue-600">
                  <feature.icon className="h-12 w-12" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}