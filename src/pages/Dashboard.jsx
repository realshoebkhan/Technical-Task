import { Inbox, Clock, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { useTickets } from '../hooks/useTickets';
import StatsCard from '../components/dashboard/StatsCard';
import TicketToolbar from '../components/dashboard/TicketToolbar';
import TicketTable from '../components/dashboard/TicketTable';
import TicketCard from '../components/dashboard/TicketCard';
import TicketDetails from '../components/ticket/TicketDetails';
import LoadingState from '../components/common/LoadingState';
import ErrorState from '../components/common/ErrorState';
import EmptyState from '../components/common/EmptyState';
import { useState } from 'react';

export default function Dashboard() {
  const {
    tickets,
    filteredTickets,
    loading,
    error,
    searchQuery,
    statusFilter,
    priorityFilter,
    selectedTicket,
    isFilterActive,
    statistics,
    setSearchQuery,
    setStatusFilter,
    setPriorityFilter,
    clearFilters,
    setSelectedTicket,
    retryFetch,
  } = useTickets();

  const [refreshing, setRefreshing] = useState(false);

  const handleManualRefresh = async () => {
    setRefreshing(true);
    await retryFetch();
    setTimeout(() => setRefreshing(false), 500);
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <ErrorState
        error={error}
        onRetry={() => retryFetch()}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1 border-b border-slate-200/60">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Customer Support
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-0.5">
            Monitor, prioritize, and resolve customer support inquiries
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleManualRefresh}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-lg transition shadow-2xs cursor-pointer"
            title="Reload ticket feed"
          >
            <RefreshCw size={13} className={`${refreshing ? 'animate-spin text-indigo-600' : 'text-slate-500'}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          icon={Inbox}
          label="Total Tickets"
          value={statistics.total}
          bgColor="bg-slate-100"
          iconColor="text-slate-700"
        />
        <StatsCard
          icon={AlertCircle}
          label="Open"
          value={statistics.open}
          trend={statistics.open > 0 ? `${statistics.open} active` : 'None'}
          bgColor="bg-rose-50"
          iconColor="text-rose-600"
        />
        <StatsCard
          icon={Clock}
          label="In Progress"
          value={statistics.inProgress}
          bgColor="bg-amber-50"
          iconColor="text-amber-600"
        />
        <StatsCard
          icon={CheckCircle2}
          label="Resolved"
          value={statistics.resolved}
          trend={`${statistics.resolved} closed`}
          bgColor="bg-emerald-50"
          iconColor="text-emerald-600"
        />
      </div>

      {/* Tickets Main Section */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 md:p-5 border-b border-slate-200/80 bg-white">
          <TicketToolbar
            searchQuery={searchQuery}
            statusFilter={statusFilter}
            priorityFilter={priorityFilter}
            onSearchChange={setSearchQuery}
            onStatusChange={setStatusFilter}
            onPriorityChange={setPriorityFilter}
            onClearFilters={clearFilters}
            isFilterActive={isFilterActive}
            ticketCount={filteredTickets.length}
            totalCount={tickets.length}
          />
        </div>

        {/* Content Table / Cards */}
        {filteredTickets.length === 0 ? (
          <div className="p-6 md:p-10">
            <EmptyState onClearFilters={clearFilters} />
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <TicketTable
                tickets={filteredTickets}
                onViewDetails={setSelectedTicket}
              />
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden p-4 space-y-3 bg-slate-50/50">
              {filteredTickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onViewDetails={setSelectedTicket}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Ticket Details Side Drawer */}
      {selectedTicket && (
        <TicketDetails
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
}
