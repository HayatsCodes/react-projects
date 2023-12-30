
const MealCardLoader = () => {
  return (
    <div>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-[100%] animate-pulse"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="h-[20px] bg-gray-300 rounded w-3/4"></div>
        </div>
        <div className="p-6">
          <div className="h-[200px] bg-gray-300 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-[10px] bg-gray-300 rounded w-1/2"></div>
            <div className="h-[10px] bg-gray-300 rounded w-1/3"></div>
            <div className="h-[10px] bg-gray-300 rounded w-1/4"></div>
            <div className="h-[10px] bg-gray-300 rounded w-1/5"></div>
            <div className="h-[10px] bg-gray-300 rounded w-1/6"></div>
            <div className="h-[10px] bg-gray-300 rounded w-1/2"></div>
            <div className="h-[10px] bg-gray-300 rounded w-1/3"></div>
            <div className="h-[10px] bg-gray-300 rounded w-1/4"></div>
            <div className="h-[10px] bg-gray-300 rounded w-1/5"></div>
            <div className="h-[10px] bg-gray-300 rounded w-1/6"></div>
          </div>
        </div>
        <div className="flex items-center p-6">
          <div className="h-[20px] bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default MealCardLoader;
