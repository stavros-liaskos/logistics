import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" aria-hidden="true" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" aria-hidden="true" />
                <span>+1 (555) 987-6543</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4">Location</h2>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-400 mt-1" aria-hidden="true" />
              <address className="not-italic">
                123 Logistics Way,<br />
                Business District,<br />
                New York, NY 10001
              </address>
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-1">
            <div className="h-full flex items-end">
              <p className="text-sm text-gray-400">
                © {currentYear} LogiTech Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}