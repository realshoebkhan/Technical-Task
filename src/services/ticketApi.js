import { mockTickets } from '../data/mockTickets';

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchTickets() {
  // Simulate network delay
  await delay(800);
  
  // Randomly simulate error (5% chance)
  if (Math.random() < 0.05) {
    throw new Error('Failed to fetch tickets. Please try again.');
  }
  
  return mockTickets;
}

export async function updateTicketStatus(ticketId, newStatus) {
  // Simulate API call
  await delay(500);
  
  const ticket = mockTickets.find((t) => t.id === ticketId);
  if (ticket) {
    ticket.status = newStatus;
    return ticket;
  }
  throw new Error('Ticket not found');
}
