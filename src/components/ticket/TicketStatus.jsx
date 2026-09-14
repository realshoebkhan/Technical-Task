import { ChevronDown, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function StatusBadge({ status }) {
  const configs = {
    'open': {
      bg: 'bg-rose-50',
      border: 'border-rose-200/80',
      text: 'text-rose-700',
      dot: 'bg-rose-500',
      pulse: true,
      label: 'Open'
    },
    'in-progress': {
      bg: 'bg-amber-50',
      border: 'border-amber-200/80',
      text: 'text-amber-800',
      dot: 'bg-amber-500',
      pulse: false,
      label: 'In Progress'
    },
    'resolved': {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200/80',
      text: 'text-emerald-700',
      dot: 'bg-emerald-500',
      pulse: false,
      label: 'Resolved'
    },
  };

  const config = configs[status] || configs['open'];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${config.bg} ${config.border} ${config.text} transition-colors shadow-2xs`}>
      <span className="relative flex h-1.5 w-1.5">
        {config.pulse && (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.dot} opacity-75`} />
        )}
        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${config.dot}`} />
      </span>
      <span>{config.label}</span>
    </span>
  );
}

export function StatusSelector({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const statuses = [
    { value: 'open', label: 'Open', desc: 'Ticket requires initial support action', dot: 'bg-rose-500' },
    { value: 'in-progress', label: 'In Progress', desc: 'Support team actively investigating', dot: 'bg-amber-500' },
    { value: 'resolved', label: 'Resolved', desc: 'Issue resolved with customer', dot: 'bg-emerald-500' },
  ];

  const current = statuses.find((s) => s.value === value) || statuses[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 hover:border-slate-400 rounded-lg text-left text-sm font-medium text-slate-800 transition flex items-center justify-between shadow-2xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
      >
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${current.dot}`} />
          <span className="font-semibold text-slate-900">{current.label}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-20 overflow-hidden py-1 divide-y divide-slate-100">
          {statuses.map((item) => {
            const isSelected = value === item.value;
            return (
              <button
                key={item.value}
                type="button"
                onClick={() => {
                  onChange(item.value);
                  setOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2.5 text-xs transition flex items-start justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-50/70 text-indigo-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className={`w-2 h-2 rounded-full ${item.dot} mt-1 flex-shrink-0`} />
                  <div>
                    <p className="font-medium text-slate-900">{item.label}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                {isSelected && <Check size={14} className="text-indigo-600 mt-0.5" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
