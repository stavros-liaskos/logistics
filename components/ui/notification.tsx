import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import content from '@/content/index.json';

export type TNotification = 'hide' | 'success' | 'error';

interface NotificationProps {
  show: TNotification;
}

export default function Notification({ show }: NotificationProps) {
  if (!show || show === 'hide') {
    return null;
  }

  const { title, description } = content.contact.notification[show];
  const colour = show === 'error' ? 'red' : 'green';

  return (
    <div
      className={cn(
        `fixed top-4 inset-x-0.5 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg border animate-in fade-in slide-in-from-top-2`,
        {
          'bg-green-50 text-green-800 border-green-200': colour === 'green',
        },
        {
          'bg-red-50 text-red-800 border-red-200': colour === 'red',
        },
      )}
      role="alert"
    >
      <CheckCircle className={`h-5 w-5 text-${colour}-500`} />
      <span className="text-sm font-medium">
        {title} {description}
      </span>
    </div>
  );
}
