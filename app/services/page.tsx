import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/services/ServiceCard';
import content from '@/content/index.json';
import { serviceIcons } from '@/lib/icons';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title={content.services.page.title}
        description={content.services.page.description}
      />
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                icon={serviceIcons[service.icon as keyof typeof serviceIcons]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}