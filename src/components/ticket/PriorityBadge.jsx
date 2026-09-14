import { AlertTriangle, AlertCircle, ArrowDown } from 'lucide-react';

export function PriorityBadge({ priority }) {
  const priorityConfig = {
    'high': {
      bg: 'bg-rose-50',
      border: 'border-rose-200/80',
      text: 'text-rose-700',
      icon: AlertCircle,
      label: 'High'
    },
    'medium': {
      bg: 'bg-amber-50',
      border: 'border-amber-200/80',
      text: 'text-amber-800',
      icon: AlertTriangle,
      label: 'Medium'
    },
    'low': {
      bg: 'bg-slate-100',
      border: 'border-slate-200',
      text: 'text-slate-600',
      icon: ArrowDown,
      label: 'Low'
    },
  };

  const config = priorityConfig[priority] || priorityConfig['medium'];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${config.bg} ${config.border} ${config.text} shadow-2xs`}>
      <Icon size={12} className="flex-shrink-0" />
      <span>{config.label}</span>
    </span>
  );
}
