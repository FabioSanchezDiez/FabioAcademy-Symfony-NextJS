export default function CoursePanelSkeleton() {
  return (
    <div className="bg-transparent sm:p-4 sm:h-55 rounded-2xl flex flex-col sm:flex-row gap-5 select-none mt-20">
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-16 rounded-2xl"></div>
          <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-6 rounded-2xl"></div>
          <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-6 rounded-2xl"></div>
          <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-6 rounded-2xl"></div>
        </div>

        <div className="flex flex-1 flex-col gap-3 mt-10">
          <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-6 rounded-2xl"></div>
          <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-6 rounded-2xl"></div>
          <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-6 rounded-2xl"></div>
        </div>
      </div>
      <div className="h-80 sm:h-80 sm:w-80 rounded-xl bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
    </div>
  );
}
