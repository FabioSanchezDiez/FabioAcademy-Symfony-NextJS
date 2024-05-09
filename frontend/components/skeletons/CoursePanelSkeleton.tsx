export default function CoursePanelSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 p-2 sm:p-4 sm:h-55 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
      <div className="h-80 sm:h-80 sm:w-80 rounded-xl bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-16 rounded-2xl"></div>
          <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-6 rounded-2xl"></div>
          <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-6 rounded-2xl"></div>
          <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-6 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}
