import { ChevronRight, Calendar, Mail } from 'lucide-react';
import { StatusBadge } from '../ticket/TicketStatus';
import { PriorityBadge } from '../ticket/PriorityBadge';
import { getInitials } from '../../utils/ticketUtils';

const AVATAR_COLORS = [
  'bg-blue-100 text-blue-700 border-blue-200',
  'bg-emerald-100 text-emerald-700 border-emerald-200',
  'bg-purple-100 text-purple-700 border-purple-200',
  'bg-amber-100 text-amber-700 border-amber-200',
  'bg-rose-100 text-rose-700 border-rose-200',
];

function getAvatarColor(name = '') {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

export default function TicketCard({ ticket, onViewDetails }) {
  return (
    <div
      onClick={() => onViewDetails(ticket)}
      className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs hover:shadow-md transition-all active:scale-[0.99] cursor-pointer space-y-3"
    >
      {/* Top row with customer info & details arrow */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`w-7 h-7 rounded-full border flex items-center justify-center font-bold text-[11px] flex-shrink-0 ${getAvatarColor(ticket.customer)}`}>
            {getInitials(ticket.customer)}
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900">{ticket.customer}</p>
            <p className="text-[10px] text-slate-500">{ticket.customerEmail}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="text-[10px] font-mono">#{ticket.id}</span>
          <ChevronRight size={16} />
        </div>
      </div>

      {/* Subject & Description */}
      <div>
        <h3 className="font-medium text-slate-900 text-sm leading-snug">
          {ticket.subject}
        </h3>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          {ticket.description}
        </p>
      </div>

      {/* Badges & Date */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
        <div className="flex items-center gap-2">
          <PriorityBadge priority={ticket.priority} />
          <StatusBadge status={ticket.status} />
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-400 tabular-nums">
          <Calendar size={12} />
          <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
