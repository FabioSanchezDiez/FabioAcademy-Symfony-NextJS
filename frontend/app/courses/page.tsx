import FilteredCourses from "@/components/home/FilteredCourses";
import CoursesSkeleton from "@/components/skeletons/CoursesSkeleton";
import CourseFilter from "@/components/ui/courses/CourseFilter";
import { Suspense } from "react";

export default function Courses({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const options = ["Programación", "Desarrollo Web", "DevOps", "Mobile"];
  return (
    <>
      {/* <CourseFilter options={options}></CourseFilter> */}

      <h1 className="my-12 text-3xl font-bold">
        Comienza a explorar todos nuestros cursos
      </h1>

      <Suspense key={currentPage} fallback={<CoursesSkeleton length={12} />}>
        <FilteredCourses currentPage={currentPage} />
      </Suspense>
    </>
  );
}
