import { useEffect } from 'react';
import { useTicketStore } from '../store/ticketStore';

/**
 * Custom hook for managing ticket operations
 * Wraps the Zustand store for cleaner component usage
 */
export function useTickets() {
  const {
    initializeTickets,
    tickets,
    filteredTickets,
    loading,
    error,
    searchQuery,
    statusFilter,
    priorityFilter,
    selectedTicket,
    setSearchQuery,
    setStatusFilter,
    setPriorityFilter,
    clearFilters,
    updateTicketStatus,
    setSelectedTicket,
  } = useTicketStore();

  // Initialize tickets on mount
  useEffect(() => {
    initializeTickets();
  }, [initializeTickets]);

  // Helper to check if any filter is active
  const isFilterActive = searchQuery !== '' || statusFilter !== 'all' || priorityFilter !== 'all';

  // Helper to get statistics
  const statistics = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === 'open').length,
    inProgress: tickets.filter((t) => t.status === 'in-progress').length,
    resolved: tickets.filter((t) => t.status === 'resolved').length,
  };

  return {
    // State
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

    // Actions
    setSearchQuery,
    setStatusFilter,
    setPriorityFilter,
    clearFilters,
    updateTicketStatus,
    setSelectedTicket,
    retryFetch: initializeTickets,
  };
}
