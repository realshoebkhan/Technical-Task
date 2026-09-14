import { Inbox, X } from 'lucide-react';

export default function EmptyState({ onClearFilters }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
        <Inbox className="text-gray-400" size={32} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">No Tickets Found</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        We couldn't find any support tickets matching your search and filter criteria. Try adjusting your filters or search terms.
      </p>
      <button
        onClick={onClearFilters}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-lg transition"
      >
        <X size={18} />
        Clear Filters
      </button>
    </div>
  );
}
