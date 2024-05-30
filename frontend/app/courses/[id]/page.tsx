import FullCourse from "@/components/home/FullCourse";
import CoursePageSkeleton from "@/components/skeletons/CoursePageSkeleton";
import { Suspense } from "react";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <Suspense fallback={<CoursePageSkeleton></CoursePageSkeleton>}>
      <FullCourse id={params.id}></FullCourse>
    </Suspense>
  );
}
