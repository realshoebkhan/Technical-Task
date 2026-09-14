// Utility functions for ticket management

export function getStatusColor(status) {
  const statusConfig = {
    'open': { bg: 'bg-red-100', text: 'text-red-700' },
    'in-progress': { bg: 'bg-blue-100', text: 'text-blue-700' },
    'resolved': { bg: 'bg-green-100', text: 'text-green-700' },
  };
  return statusConfig[status] || statusConfig['open'];
}

export function getPriorityColor(priority) {
  const priorityConfig = {
    'high': { bg: 'bg-red-100', text: 'text-red-700' },
    'medium': { bg: 'bg-yellow-100', text: 'text-yellow-700' },
    'low': { bg: 'bg-green-100', text: 'text-green-700' },
  };
  return priorityConfig[priority] || priorityConfig['medium'];
}

export function getStatusLabel(status) {
  const labels = {
    'open': 'Open',
    'in-progress': 'In Progress',
    'resolved': 'Resolved',
  };
  return labels[status] || status;
}

export function getPriorityLabel(priority) {
  const labels = {
    'high': 'High',
    'medium': 'Medium',
    'low': 'Low',
  };
  return labels[priority] || priority;
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function formatDateTime(date) {
  return new Date(date).toLocaleString();
}

export function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export function filterTickets(tickets, searchQuery, statusFilter, priorityFilter) {
  return tickets.filter((ticket) => {
    // Search filter
    const query = searchQuery.toLowerCase();
    const matchesSearch = query === '' ||
      ticket.customer.toLowerCase().includes(query) ||
      ticket.customerEmail.toLowerCase().includes(query) ||
      ticket.subject.toLowerCase().includes(query) ||
      ticket.description.toLowerCase().includes(query);

    // Status filter
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;

    // Priority filter
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });
}

export function calculateStatistics(tickets) {
  return {
    total: tickets.length,
    open: tickets.filter((t) => t.status === 'open').length,
    inProgress: tickets.filter((t) => t.status === 'in-progress').length,
    resolved: tickets.filter((t) => t.status === 'resolved').length,
  };
}
