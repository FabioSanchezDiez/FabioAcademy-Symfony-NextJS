import { GoVideo } from "react-icons/go";

export default function CourseVideoSkeleton() {
  return (
    <div className="border-4 border-slate-600 border-solid w-[1000px] h-[550px] animate-pulse bg-gray-300 dark:bg-gray-700 grid place-items-center">
      <GoVideo></GoVideo>
    </div>
  );
}
