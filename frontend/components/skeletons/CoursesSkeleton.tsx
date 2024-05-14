type CoursesSkeletonProps = {
  length: number;
};
export default function CoursesSkeleton({ length }: CoursesSkeletonProps) {
  return (
    <section className="container flex flex-col xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 gap-6">
      {Array.from({ length: length }, (_, i) => i + 1).map((c) => (
        <div
          key={c}
          className="bg-white dark:bg-slate-800 p-2 sm:p-4 sm:h-55 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none "
        >
          <div className="h-40 sm:h-40 sm:w-60 rounded-xl bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          <div className="flex flex-col flex-1 gap-5 sm:p-2">
            <div className="flex flex-1 flex-col gap-3">
              <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-14 rounded-2xl"></div>
              <div className="bg-gray-300 dark:bg-gray-700 w-full animate-pulse h-3 rounded-2xl"></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
