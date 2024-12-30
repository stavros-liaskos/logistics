import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title?: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="h-12 w-12 text-blue-600 mx-auto">
        <Icon className="h-12 w-12" />
      </div>
      {title && <h3 className="mt-8 text-xl font-semibold text-gray-900 text-center">{title}</h3>}
      <p className="mt-5 text-gray-600 text-center">{description}</p>
    </div>
  );
}
