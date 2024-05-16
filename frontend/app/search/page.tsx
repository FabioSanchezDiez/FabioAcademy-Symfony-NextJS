import SearchedCourses from "@/components/home/SearchedCourses";
import CoursesSkeleton from "@/components/skeletons/CoursesSkeleton";
import { Suspense } from "react";

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";

  return (
    <>
      <div className="mt-10">
        {!query ? (
          <p className="text-center">
            Por favor, indique lo que quiere encontrar
          </p>
        ) : (
          <Suspense
            key={query + currentPage}
            fallback={<CoursesSkeleton length={12} cols={2}></CoursesSkeleton>}
          >
            <SearchedCourses
              query={query}
              currentPage={currentPage}
            ></SearchedCourses>
          </Suspense>
        )}
      </div>
    </>
  );
}
