import { LayoutDashboard, Inbox, CheckCircle2, AlertCircle, Settings, HelpCircle, X, ShieldAlert } from 'lucide-react';
import { useTicketStore } from '../../store/ticketStore';

export default function Sidebar({ open, onClose, activeNav = 'dashboard', onSelectNav }) {
  const { tickets } = useTicketStore();

  const totalCount = tickets.length;
  const highPriorityCount = tickets.filter((t) => t.priority === 'high').length;
  const resolvedCount = tickets.filter((t) => t.status === 'resolved').length;

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
    { id: 'all-tickets', icon: Inbox, label: 'All Tickets', badge: totalCount },
    { id: 'high-priority', icon: AlertCircle, label: 'High Priority', badge: highPriorityCount, badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'resolved', icon: CheckCircle2, label: 'Resolved', badge: resolvedCount, badgeColor: 'bg-emerald-100 text-emerald-700' },
  ];

  const secondaryItems = [
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'help', icon: HelpCircle, label: 'Help & Docs' },
  ];

  return (
    <aside
      className={`
        fixed md:sticky top-0 md:top-16 left-0 z-40 md:z-10
        w-72 md:w-60 h-full md:h-[calc(100vh-4rem)]
        bg-white border-r border-slate-200/80
        transition-all duration-300 ease-in-out flex-shrink-0
        flex flex-col justify-between overflow-y-auto
        ${
          open
            ? 'translate-x-0 md:ml-0 opacity-100 shadow-2xl md:shadow-none'
            : '-translate-x-full md:-ml-60 md:opacity-0 pointer-events-none'
        }
      `}
    >
      <div>
        {/* Mobile Header inside Sidebar */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 md:hidden">
          <p className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Navigation</p>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-3">
          {/* Main Navigation */}
          <div className="space-y-1 mb-6">
            <p className="px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Workspace
            </p>
            {menuItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectNav(item.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                  }`}
                >
                  <item.icon size={16} className={isActive ? 'text-indigo-600' : 'text-slate-400'} />
                  <span className="flex-1 truncate">{item.label}</span>
                  {item.badge !== undefined && (
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full tabular-nums ${
                        item.badgeColor || (isActive ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600')
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Secondary Navigation */}
          <div className="space-y-1 border-t border-slate-100 pt-4">
            <p className="px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Preferences
            </p>
            {secondaryItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectNav(item.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                  }`}
                >
                  <item.icon size={16} className={isActive ? 'text-indigo-600' : 'text-slate-400'} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* System Status footer */}
      <div className="p-3 m-3 rounded-xl bg-slate-50 border border-slate-200/80">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-semibold text-slate-800">Operational</span>
        </div>
        <p className="text-[10px] text-slate-500 mt-0.5">SLA response time: &lt;15m</p>
      </div>
    </aside>
  );
}
