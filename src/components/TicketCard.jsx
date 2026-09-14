import { ChevronRight, Calendar, Mail } from 'lucide-react';
import { StatusBadge, PriorityBadge } from './Badges';

export default function TicketCard({ ticket, onViewDetails }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition cursor-pointer"
      onClick={() => onViewDetails(ticket)}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-base mb-1">{ticket.subject}</h3>
          <p className="text-sm text-gray-600">{ticket.customer}</p>
        </div>
        <ChevronRight className="text-gray-400 flex-shrink-0" size={20} />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{ticket.description}</p>

      {/* Badges */}
      <div className="flex items-center gap-2 mb-3">
        <PriorityBadge priority={ticket.priority} />
        <StatusBadge status={ticket.status} />
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-200 pt-3">
        <div className="flex items-center gap-1">
          <Mail size={14} />
          <span className="line-clamp-1">{ticket.customerEmail}</span>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <Calendar size={14} />
          <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
