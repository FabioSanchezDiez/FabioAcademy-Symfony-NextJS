import FilteredCourses from "@/components/home/FilteredCourses";
import PopularCourses from "@/components/home/PopularCourses";
import CoursesSkeleton from "@/components/skeletons/CoursesSkeleton";
import CourseFilter from "@/components/ui/courses/CourseFilter";
import { Suspense } from "react";

export default function Courses() {
  const options = ["Programación", "Desarrollo Web", "DevOps", "Mobile"];
  return (
    <>
      <CourseFilter options={options}></CourseFilter>

      <Suspense fallback={<CoursesSkeleton length={12} />}>
        <FilteredCourses />
      </Suspense>
    </>
  );
}
