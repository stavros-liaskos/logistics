import content from '@/content/index.json';
import ServiceCard from '@/components/services/ServiceCard';
import { serviceIcons } from '@/lib/icons';

export default function Summary() {
  return (
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
  );
}
