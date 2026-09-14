import { useState, useEffect } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import HelpSupport from './pages/HelpSupport';
import { useTicketStore } from './store/ticketStore';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('dashboard');
  const { clearFilters, setPriorityFilter, setStatusFilter } = useTicketStore();

  // Close sidebar on mobile by default
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectNav = (navId) => {
    setActiveNav(navId);

    // Auto-apply or reset filters based on selected tab
    if (navId === 'dashboard' || navId === 'all-tickets') {
      clearFilters();
    } else if (navId === 'high-priority') {
      clearFilters();
      setPriorityFilter('high');
    } else if (navId === 'resolved') {
      clearFilters();
      setStatusFilter('resolved');
    }

    // Auto close sidebar on mobile when navigating
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <DashboardLayout
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      activeNav={activeNav}
      onSelectNav={handleSelectNav}
    >
      {activeNav === 'settings' && <Settings />}
      {activeNav === 'help' && <HelpSupport />}
      {['dashboard', 'all-tickets', 'high-priority', 'resolved'].includes(activeNav) && (
        <Dashboard />
      )}
    </DashboardLayout>
  );
}
