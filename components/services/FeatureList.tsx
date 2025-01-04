interface FeatureListProps {
  title: string;
  features: string[];
  index: number;
}

export default function FeatureList({ title, features, index }: FeatureListProps) {
  return (
    <div id={`service-${index}`} className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
              {index + 1}
            </span>
            <span className="ml-3 text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
