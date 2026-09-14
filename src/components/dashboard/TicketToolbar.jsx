import { Search, X, SlidersHorizontal, RotateCcw } from 'lucide-react';
import FilterDropdown from '../common/FilterDropdown';

export default function TicketToolbar({
  searchQuery,
  statusFilter,
  priorityFilter,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
  onClearFilters,
  isFilterActive,
  ticketCount,
  totalCount,
}) {
  const statusOptions = [
    { value: 'all', label: 'All Statuses' },
    { value: 'open', label: 'Open' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'resolved', label: 'Resolved' },
  ];

  const priorityOptions = [
    { value: 'all', label: 'All Priorities' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ];

  return (
    <div className="space-y-3.5">
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search tickets by customer name, subject, or email..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-9 py-2 bg-slate-50/60 hover:bg-white focus:bg-white border border-slate-300 focus:border-indigo-500 rounded-lg text-xs md:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-3 focus:ring-indigo-500/15 transition shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded transition"
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Filters Group */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 mr-1">
            <SlidersHorizontal size={14} />
            <span className="font-medium">Filter:</span>
          </div>

          <FilterDropdown
            label="Status"
            options={statusOptions}
            value={statusFilter}
            onChange={onStatusChange}
          />

          <FilterDropdown
            label="Priority"
            options={priorityOptions}
            value={priorityFilter}
            onChange={onPriorityChange}
          />

          {isFilterActive && (
            <button
              onClick={onClearFilters}
              className="inline-flex items-center gap-1.5 px-3 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 rounded-lg text-xs font-medium transition cursor-pointer shadow-2xs"
            >
              <RotateCcw size={12} />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Results Count pill */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
        <p>
          Showing <span className="font-semibold text-slate-900 tabular-nums">{ticketCount}</span> of{' '}
          <span className="font-semibold text-slate-900 tabular-nums">{totalCount}</span> total support tickets
        </p>
        {isFilterActive && (
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-[11px] font-medium px-2 py-0.5 rounded-md border border-amber-200/60">
            Filtered view active
          </span>
        )}
      </div>
    </div>
  );
}
