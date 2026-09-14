import { X, Mail, Calendar, Clock, Sparkles } from 'lucide-react';
import { StatusBadge, StatusSelector } from './TicketStatus';
import { PriorityBadge } from './PriorityBadge';
import Conversation from './Conversation';
import { useTicketStore } from '../../store/ticketStore';
import { getInitials } from '../../utils/ticketUtils';

export default function TicketDetails({ ticket, onClose }) {
  const { updateTicketStatus } = useTicketStore();

  if (!ticket) return null;

  const handleStatusChange = (newStatus) => {
    updateTicketStatus(ticket.id, newStatus);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-2xs z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-white shadow-2xl z-50 overflow-y-auto flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-5 py-4 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                  Ticket #{ticket.id}
                </span>
                <StatusBadge status={ticket.status} />
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
                aria-label="Close panel"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Drawer Body */}
          <div className="p-5 space-y-5">
            {/* Subject & Description */}
            <div className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 leading-snug">
                {ticket.subject}
              </h2>
              <p className="text-xs text-slate-600 bg-slate-50/70 border border-slate-200/70 p-3 rounded-lg leading-relaxed whitespace-pre-wrap">
                {ticket.description}
              </p>
            </div>

            {/* Customer Information Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-2.5">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Requester Info
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-bold text-xs flex items-center justify-center shadow-xs flex-shrink-0">
                  {getInitials(ticket.customer)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-xs text-slate-900 truncate">{ticket.customer}</p>
                  <a
                    href={`mailto:${ticket.customerEmail}`}
                    className="text-[11px] text-indigo-600 hover:underline flex items-center gap-1 mt-0.5 truncate"
                  >
                    <Mail size={12} className="flex-shrink-0" />
                    {ticket.customerEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Metadata Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white border border-slate-200/80 p-3 rounded-lg">
                <p className="text-[11px] font-medium text-slate-500 mb-1">Priority</p>
                <PriorityBadge priority={ticket.priority} />
              </div>
              <div className="bg-white border border-slate-200/80 p-3 rounded-lg">
                <p className="text-[11px] font-medium text-slate-500 mb-1">Date Created</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                  <Calendar size={13} className="text-slate-400" />
                  <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Status Selector */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Change Status
              </label>
              <StatusSelector value={ticket.status} onChange={handleStatusChange} />
            </div>

            {/* Conversation Thread */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Activity & Conversation
              </label>
              <Conversation messages={ticket.messages} ticketId={ticket.id} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/70 text-center">
          <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
            <Sparkles size={12} className="text-indigo-500" />
            Live sync active: Updates reflect instantly
          </p>
        </div>
      </div>
    </>
  );
}
