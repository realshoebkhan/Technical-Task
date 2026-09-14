import { AlertCircle, RefreshCw } from 'lucide-react';

export default function ErrorState({ error, onRetry }) {
  return (
    <div className="bg-white rounded-xl border border-rose-200/80 p-10 text-center max-w-md mx-auto shadow-2xs my-8">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-50 border border-rose-200 rounded-xl mb-3 text-rose-600">
        <AlertCircle size={24} />
      </div>
      <h3 className="text-sm font-semibold text-slate-900 mb-1">Failed to synchronize tickets</h3>
      <p className="text-xs text-slate-500 mb-5 leading-relaxed">
        {error || 'An unexpected network error occurred while fetching support data. Please retry.'}
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition shadow-xs cursor-pointer"
      >
        <RefreshCw size={13} />
        Retry connection
      </button>
    </div>
  );
}
