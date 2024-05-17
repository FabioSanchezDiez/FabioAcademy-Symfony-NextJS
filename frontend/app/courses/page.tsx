import FilteredCourses from "@/components/home/FilteredCourses";
import PopularCourses from "@/components/home/PopularCourses";
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
      <CourseFilter options={options}></CourseFilter>

      <Suspense key={currentPage} fallback={<CoursesSkeleton length={12} />}>
        <FilteredCourses currentPage={currentPage} />
      </Suspense>
    </>
  );
}
