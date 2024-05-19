import FullCourse from "@/components/home/FullCourse";
import CoursePanelSkeleton from "@/components/skeletons/CoursePanelSkeleton";
import { Suspense } from "react";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <Suspense fallback={<CoursePanelSkeleton></CoursePanelSkeleton>}>
      <FullCourse id={params.id}></FullCourse>
    </Suspense>
  );
}
