import { ArrowUp } from 'lucide-react';

export default function StatsCard({ icon: Icon, label, value, trend, bgColor, iconColor }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between mb-4">
        <div className={`${bgColor} p-3 rounded-lg`}>
          <Icon size={24} className={iconColor} />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
            <ArrowUp size={16} />
            <span>{trend}</span>
          </div>
        )}
      </div>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}
