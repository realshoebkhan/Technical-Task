import { ChevronRight } from 'lucide-react';
import { StatusBadge, PriorityBadge } from './Badges';

export default function TicketTable({ tickets, onViewDetails }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Customer</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Subject</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Priority</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Created</th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr
              key={ticket.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition cursor-pointer"
              onClick={() => onViewDetails(ticket)}
            >
              <td className="px-6 py-4">
                <div>
                  <p className="font-medium text-gray-900 text-sm">{ticket.customer}</p>
                  <p className="text-xs text-gray-500">{ticket.customerEmail}</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <p className="text-sm text-gray-900 max-w-xs truncate">{ticket.subject}</p>
              </td>
              <td className="px-6 py-4">
                <PriorityBadge priority={ticket.priority} />
              </td>
              <td className="px-6 py-4">
                <StatusBadge status={ticket.status} />
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {new Date(ticket.createdAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-center">
                <button
                  className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-600 rounded-lg transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewDetails(ticket);
                  }}
                  aria-label="View details"
                >
                  <ChevronRight size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
