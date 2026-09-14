import { ChevronRight } from 'lucide-react';
import { StatusBadge } from '../ticket/TicketStatus';
import { PriorityBadge } from '../ticket/PriorityBadge';
import { getInitials } from '../../utils/ticketUtils';

const AVATAR_COLORS = [
  'bg-blue-100 text-blue-700 border-blue-200',
  'bg-emerald-100 text-emerald-700 border-emerald-200',
  'bg-purple-100 text-purple-700 border-purple-200',
  'bg-amber-100 text-amber-700 border-amber-200',
  'bg-rose-100 text-rose-700 border-rose-200',
  'bg-cyan-100 text-cyan-700 border-cyan-200',
];

function getAvatarColor(name = '') {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

export default function TicketTable({ tickets, onViewDetails }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-200/80 bg-slate-50/50">
            <th className="px-5 py-3.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-5 py-3.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Subject
            </th>
            <th className="px-5 py-3.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Priority
            </th>
            <th className="px-5 py-3.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-5 py-3.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Created
            </th>
            <th className="px-4 py-3.5 text-right text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {tickets.map((ticket) => (
            <tr
              key={ticket.id}
              onClick={() => onViewDetails(ticket)}
              className="group hover:bg-indigo-50/40 transition-colors cursor-pointer"
            >
              {/* Customer */}
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs flex-shrink-0 ${getAvatarColor(ticket.customer)}`}>
                    {getInitials(ticket.customer)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-xs md:text-sm leading-tight">
                      {ticket.customer}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-normal">
                      {ticket.customerEmail}
                    </p>
                  </div>
                </div>
              </td>

              {/* Subject */}
              <td className="px-5 py-4">
                <div className="max-w-md">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-medium text-slate-400">
                      #{ticket.id}
                    </span>
                    <p className="text-xs md:text-sm font-medium text-slate-900 truncate">
                      {ticket.subject}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {ticket.description}
                  </p>
                </div>
              </td>

              {/* Priority */}
              <td className="px-5 py-4 whitespace-nowrap">
                <PriorityBadge priority={ticket.priority} />
              </td>

              {/* Status */}
              <td className="px-5 py-4 whitespace-nowrap">
                <StatusBadge status={ticket.status} />
              </td>

              {/* Created */}
              <td className="px-5 py-4 whitespace-nowrap text-xs text-slate-600 tabular-nums">
                {new Date(ticket.createdAt).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </td>

              {/* Action */}
              <td className="px-4 py-4 whitespace-nowrap text-right">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewDetails(ticket);
                  }}
                  className="inline-flex items-center justify-center p-1.5 text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-100/50 rounded-lg transition"
                  aria-label="View ticket details"
                >
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
