import PageHeader from '@/components/PageHeader';
import content from '@/content/index.json';
import FeatureList from '@/components/services/FeatureList';

export default function ServicesPage() {
  const { page, items } = content.services;

  return (
    <>
      <PageHeader title={page.title} description={page.description} />

      <div className="pb-16 pt-4 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {items.map((section, key) => (
              <FeatureList key={section.title} title={section.title} features={section.features} index={key} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
