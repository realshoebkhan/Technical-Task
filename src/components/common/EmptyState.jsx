import { Inbox, RotateCcw } from 'lucide-react';

export default function EmptyState({ onClearFilters }) {
  return (
    <div className="py-12 px-4 text-center max-w-sm mx-auto">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-xl mb-3 text-slate-400">
        <Inbox size={24} />
      </div>
      <h3 className="text-sm font-semibold text-slate-900 mb-1">No matching tickets</h3>
      <p className="text-xs text-slate-500 mb-5 leading-relaxed">
        No tickets matched your active search or filter criteria. Try resetting your query or adjusting the filters.
      </p>
      <button
        type="button"
        onClick={onClearFilters}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition shadow-xs cursor-pointer"
      >
        <RotateCcw size={13} />
        Reset all filters
      </button>
    </div>
  );
}
