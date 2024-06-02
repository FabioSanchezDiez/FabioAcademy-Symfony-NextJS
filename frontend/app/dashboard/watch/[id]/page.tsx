import WatchCourse from "@/components/dashboard/WatchCourse";
import CoursePageSkeleton from "@/components/skeletons/CoursePageSkeleton";
import { Suspense } from "react";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      <Suspense fallback={<CoursePageSkeleton></CoursePageSkeleton>}>
        <WatchCourse id={params.id}></WatchCourse>
      </Suspense>
    </>
  );
}
