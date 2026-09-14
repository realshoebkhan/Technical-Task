import Header from './Header';
import Sidebar from './Sidebar';

export default function DashboardLayout({
  children,
  sidebarOpen,
  setSidebarOpen,
  activeNav,
  onSelectNav,
}) {
  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile Backdrop Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 md:hidden backdrop-blur-xs transition-opacity"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar backdrop"
          />
        )}

        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeNav={activeNav}
          onSelectNav={onSelectNav}
        />
        
        <main className="flex-1 overflow-y-auto transition-all duration-300 ease-in-out">
          <div className="p-4 sm:p-6 lg:p-8 w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
