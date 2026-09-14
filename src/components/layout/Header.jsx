import { Menu, X, Headphones, LogOut, Circle } from 'lucide-react';

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="bg-white border-b border-slate-200/80 sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Left - Menu Toggle & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition cursor-pointer"
              aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
              title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            >
              {sidebarOpen ? <X size={19} /> : <Menu size={19} />}
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-xs">
                <Headphones size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-bold text-sm md:text-base text-slate-900 leading-none">Support Desk</h1>
                  <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">Customer Care & Ticket Ops</p>
              </div>
            </div>
          </div>

          {/* Right - Profile & Quick Actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 pl-3 sm:border-l sm:border-slate-200">
              <div className="relative">
                <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-xs">
                  AJ
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-slate-900 leading-tight">Alex Johnson</p>
                <p className="text-[11px] text-slate-400">Support Agent</p>
              </div>
            </div>

            <button
              className="hidden lg:inline-flex items-center p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition"
              title="Logout"
              aria-label="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
