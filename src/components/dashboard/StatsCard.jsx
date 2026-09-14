import { ArrowUpRight } from 'lucide-react';

export default function StatsCard({ icon: Icon, label, value, trend, bgColor, iconColor, accentBorder }) {
  return (
    <div className={`bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-all duration-200 group relative overflow-hidden ${accentBorder || ''}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
          {label}
        </span>
        <div className={`p-2 rounded-lg ${bgColor} ${iconColor} transition-transform group-hover:scale-105`}>
          <Icon size={18} />
        </div>
      </div>

      <div className="flex items-baseline justify-between mt-2">
        <p className="text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
          {value}
        </p>

        {trend && (
          <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
            <ArrowUpRight size={12} />
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}
