export function StatusBadge({ status }) {
  const statusConfig = {
    'open': { bg: 'bg-red-100', text: 'text-red-700', label: 'Open' },
    'in-progress': { bg: 'bg-blue-100', text: 'text-blue-700', label: 'In Progress' },
    'resolved': { bg: 'bg-green-100', text: 'text-green-700', label: 'Resolved' },
  };

  const config = statusConfig[status] || statusConfig['open'];

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}

export function PriorityBadge({ priority }) {
  const priorityConfig = {
    'high': { bg: 'bg-red-100', text: 'text-red-700', label: 'High' },
    'medium': { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Medium' },
    'low': { bg: 'bg-green-100', text: 'text-green-700', label: 'Low' },
  };

  const config = priorityConfig[priority] || priorityConfig['medium'];

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}
