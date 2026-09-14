export default function LoadingState() {
  return (
    <div className="space-y-4">
      {/* Skeleton for stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="h-10 w-10 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
            <div className="h-4 w-24 bg-gray-200 rounded mb-3 animate-pulse"></div>
            <div className="h-8 w-16 bg-gray-300 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Skeleton for table/cards */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 w-32 bg-gray-100 rounded animate-pulse"></div>
              </div>
              <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
