export default function LoadingState() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Skeleton for Header */}
      <div className="space-y-2">
        <div className="h-7 w-48 bg-slate-200 rounded-lg"></div>
        <div className="h-4 w-72 bg-slate-100 rounded"></div>
      </div>

      {/* Skeleton for stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200/80 p-5 space-y-3">
            <div className="flex justify-between items-center">
              <div className="h-3 w-20 bg-slate-200 rounded"></div>
              <div className="h-7 w-7 bg-slate-100 rounded-lg"></div>
            </div>
            <div className="h-8 w-16 bg-slate-200 rounded-lg"></div>
          </div>
        ))}
      </div>

      {/* Skeleton for table */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 space-y-4">
        <div className="h-9 w-full max-w-sm bg-slate-100 rounded-lg"></div>
        <div className="space-y-3 pt-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-100 last:border-0">
              <div className="h-8 w-8 bg-slate-200 rounded-full flex-shrink-0"></div>
              <div className="flex-1 space-y-1.5">
                <div className="h-3.5 w-40 bg-slate-200 rounded"></div>
                <div className="h-3 w-28 bg-slate-100 rounded"></div>
              </div>
              <div className="h-5 w-16 bg-slate-100 rounded-full"></div>
              <div className="h-5 w-20 bg-slate-100 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
