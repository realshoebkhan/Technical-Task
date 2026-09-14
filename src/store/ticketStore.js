import { create } from 'zustand';
import { fetchTickets } from '../services/ticketApi';
import { filterTickets } from '../utils/ticketUtils';

export const useTicketStore = create((set) => ({
  // State
  tickets: [],
  filteredTickets: [],
  loading: false,
  error: null,
  searchQuery: '',
  statusFilter: 'all',
  priorityFilter: 'all',
  selectedTicket: null,

  // Actions
  initializeTickets: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchTickets();
      set({ tickets: data, loading: false });
      // Apply filters after fetching
      set((state) => ({
        filteredTickets: applyFilters(state.tickets, state.searchQuery, state.statusFilter, state.priorityFilter)
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  setSearchQuery: (query) => {
    set((state) => {
      const newState = { searchQuery: query };
      newState.filteredTickets = applyFilters(
        state.tickets,
        query,
        state.statusFilter,
        state.priorityFilter
      );
      return newState;
    });
  },

  setStatusFilter: (status) => {
    set((state) => {
      const newState = { statusFilter: status };
      newState.filteredTickets = applyFilters(
        state.tickets,
        state.searchQuery,
        status,
        state.priorityFilter
      );
      return newState;
    });
  },

  setPriorityFilter: (priority) => {
    set((state) => {
      const newState = { priorityFilter: priority };
      newState.filteredTickets = applyFilters(
        state.tickets,
        state.searchQuery,
        state.statusFilter,
        priority
      );
      return newState;
    });
  },

  clearFilters: () => {
    set((state) => {
      const newState = {
        searchQuery: '',
        statusFilter: 'all',
        priorityFilter: 'all'
      };
      newState.filteredTickets = applyFilters(
        state.tickets,
        '',
        'all',
        'all'
      );
      return newState;
    });
  },

  updateTicketStatus: (ticketId, newStatus) => {
    set((state) => {
      const updatedTickets = state.tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      );
      return {
        tickets: updatedTickets,
        filteredTickets: applyFilters(
          updatedTickets,
          state.searchQuery,
          state.statusFilter,
          state.priorityFilter
        ),
        selectedTicket: state.selectedTicket?.id === ticketId
          ? { ...state.selectedTicket, status: newStatus }
          : state.selectedTicket
      };
    });
  },

  addTicketMessage: (ticketId, messageText, sender = 'Alex Johnson (Support)') => {
    set((state) => {
      const newMessage = {
        id: `msg-${Date.now()}`,
        sender,
        senderType: 'agent',
        message: messageText,
        timestamp: new Date().toISOString()
      };

      const updatedTickets = state.tickets.map((ticket) => {
        if (ticket.id === ticketId) {
          return {
            ...ticket,
            messages: [...(ticket.messages || []), newMessage]
          };
        }
        return ticket;
      });

      const updatedSelectedTicket =
        state.selectedTicket?.id === ticketId
          ? {
              ...state.selectedTicket,
              messages: [...(state.selectedTicket.messages || []), newMessage]
            }
          : state.selectedTicket;

      return {
        tickets: updatedTickets,
        filteredTickets: applyFilters(
          updatedTickets,
          state.searchQuery,
          state.statusFilter,
          state.priorityFilter
        ),
        selectedTicket: updatedSelectedTicket
      };
    });
  },

  setSelectedTicket: (ticket) => {
    set({ selectedTicket: ticket });
  },

  getStatistics: () => {
    const state = useTicketStore.getState();
    const { tickets } = state;
    return {
      total: tickets.length,
      open: tickets.filter((t) => t.status === 'open').length,
      inProgress: tickets.filter((t) => t.status === 'in-progress').length,
      resolved: tickets.filter((t) => t.status === 'resolved').length,
    };
  }
}));

// Wrapper function for applying filters - uses utility function
function applyFilters(tickets, searchQuery, statusFilter, priorityFilter) {
  return filterTickets(tickets, searchQuery, statusFilter, priorityFilter);
}
