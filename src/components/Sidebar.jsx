import { Home, Inbox, CheckCircle, AlertCircle, Settings, HelpCircle } from 'lucide-react';

export default function Sidebar({ open }) {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '#', active: true },
    { icon: Inbox, label: 'All Tickets', badge: '28' },
    { icon: AlertCircle, label: 'High Priority', badge: '3' },
    { icon: CheckCircle, label: 'Resolved', badge: '12' },
  ];

  const secondaryItems = [
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help & Support' },
  ];

  return (
    <aside
      className={`${
        open ? 'translate-x-0' : '-translate-x-full'
      } fixed left-0 top-0 z-30 w-64 bg-white border-r border-gray-200 transition-transform duration-300 md:translate-x-0 md:sticky md:top-16 h-[calc(100vh-4rem)] overflow-y-auto`}
    >
      <div className="pt-4 md:pt-6">
        {/* Main Menu */}
        <nav className="px-4 space-y-2 mb-8">
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Navigation
          </p>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href || '#'}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                item.active
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon size={18} />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Secondary Menu */}
        <nav className="px-4 border-t border-gray-200 pt-4 space-y-2">
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Support
          </p>
          {secondaryItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
