import WatchCourse from "@/components/dashboard/WatchCourse";
import CoursePageSkeleton from "@/components/skeletons/CoursePageSkeleton";
import { fetchSectionsByCourse } from "@/src/lib/data";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: { id: number; lesson: number };
}) {
  const sections = await fetchSectionsByCourse(params.id);
  return (
    <>
      <Suspense
        fallback={<CoursePageSkeleton></CoursePageSkeleton>}
        key={params.id + params.lesson}
      >
        <WatchCourse id={params.id} lessonId={params.lesson}></WatchCourse>
      </Suspense>
    </>
  );
}
