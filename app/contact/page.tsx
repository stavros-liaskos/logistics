import PageHeader from '@/components/PageHeader';
import content from '@/content/index.json';
import { contactIcons } from '@/lib/icons';
import dynamic from 'next/dynamic';
import ContactForm from '@/components/contact/ContactForm';

const AddressMap = dynamic(() => import('@/components/contact/AddressMap'));

export default function ContactPage() {
  const { page, map, info, form } = content.contact;

  return (
    <>
      <PageHeader title={page.title} description={page.description} />
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{form.title}</h2>
              <p className="mt-4 text-gray-600">{form.description}</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{info.title}</h2>
              <div className="mt-8 space-y-8">
                {info.sections.map(section => {
                  const Icon = contactIcons[section.icon as keyof typeof contactIcons];
                  return (
                    <div key={section.title} className="flex items-start space-x-4" data-testid={section.title}>
                      <div className="flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{section.title}</h3>
                        <div className="mt-2 space-y-1">
                          {section.details.map(detail => {
                            switch (section.icon) {
                              case 'Email':
                                return (
                                  <a
                                    href={`mailto:${section.href}`}
                                    className="block mt-4 text-blue-600"
                                    key={detail}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {detail}
                                  </a>
                                );
                              case 'Phone':
                                return (
                                  <a
                                    href={encodeURI(section.href)}
                                    className="block mt-4 text-blue-600"
                                    key={detail}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {detail}
                                  </a>
                                );
                              case 'Address':
                                return (
                                  <a
                                    href={`${section.href}`}
                                    className="block mt-4 text-blue-600"
                                    key={detail}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {detail}
                                  </a>
                                );
                              /* v8 ignore next 5 */
                              default:
                                return (
                                  <p className="text-gray-600" key={detail}>
                                    {detail}
                                  </p>
                                );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="py-24 bg-gray-50 hidden md:block">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">{map.title}</h2>
                <p className="mt-4 text-gray-600">{map.description}</p>
                <div className="mt-8 flex justify-center">
                  <AddressMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
