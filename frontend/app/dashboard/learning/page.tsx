import MyCourses from "@/components/dashboard/MyCourses";
import CoursesSkeleton from "@/components/skeletons/CoursesSkeleton";
import { Suspense } from "react";

export default function Page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <h1 className="text-3xl font-bold my-10">Mis cursos</h1>
      <Suspense
        fallback={<CoursesSkeleton length={12} cols={2}></CoursesSkeleton>}
      >
        <MyCourses currentPage={currentPage}></MyCourses>
      </Suspense>
    </>
  );
}
