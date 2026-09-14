import { X, Mail, Calendar, AlertCircle } from 'lucide-react';
import { StatusBadge, PriorityBadge } from './Badges';
import Conversation from './Conversation';
import { useTicketStore } from '../store/ticketStore';
import { useState } from 'react';

export default function TicketDetails({ ticket, onClose }) {
  const { updateTicketStatus } = useTicketStore();
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(ticket?.status);

  if (!ticket) return null;

  const statuses = ['open', 'in-progress', 'resolved'];

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
    updateTicketStatus(ticket.id, newStatus);
    setStatusDropdownOpen(false);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 md:p-6">
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-bold text-gray-900 flex-1">Ticket Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-1">Ticket #{ticket.id}</p>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-6">
          {/* Customer Info */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Customer Information</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {getInitials(ticket.customer)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{ticket.customer}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Mail size={14} />
                    {ticket.customerEmail}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Issue Details */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Issue Details</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">Subject</p>
                <p className="text-sm text-gray-900 font-medium mt-1">{ticket.subject}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">Description</p>
                <p className="text-sm text-gray-900 mt-1 leading-relaxed">{ticket.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Priority</p>
                  <PriorityBadge priority={ticket.priority} />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Status</p>
                  <StatusBadge status={currentStatus} />
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Created</p>
                <div className="flex items-center gap-1 text-sm text-gray-900">
                  <Calendar size={14} />
                  {new Date(ticket.createdAt).toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Status Control */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Update Status</p>
            <div className="relative">
              <button
                onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition flex items-center justify-between"
              >
                <span>Change to...</span>
                <svg
                  className={`w-5 h-5 transition ${statusDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {statusDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {statuses.map((status) => (
                    <button
                      key={status}
                      onClick={() => handleStatusChange(status)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition ${
                        currentStatus === status
                          ? 'bg-blue-50 text-blue-700 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {status === 'open' && 'Open'}
                      {status === 'in-progress' && 'In Progress'}
                      {status === 'resolved' && 'Resolved'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Conversation */}
          <div>
            <Conversation messages={ticket.messages} />
          </div>

          {/* Info Alert */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex gap-3">
              <AlertCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900">Pro tip</p>
                <p className="text-sm text-blue-800 mt-1">
                  Changing the ticket status will immediately update statistics and filter results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
