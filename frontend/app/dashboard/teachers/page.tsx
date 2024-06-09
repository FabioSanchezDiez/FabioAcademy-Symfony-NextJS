import CheckTeacher from "@/components/auth/CheckTeacher";
import OwnedCourses from "@/components/dashboard/OwnedCourses";
import CoursesSkeleton from "@/components/skeletons/CoursesSkeleton";
import { Suspense } from "react";

export default function Page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="max-md:px-6">
      <CheckTeacher></CheckTeacher>

      <h1 className="my-12 text-3xl font-bold">
        Bienvenido al gestor de tus cursos
      </h1>

      <Suspense
        key={currentPage}
        fallback={<CoursesSkeleton length={12} cols={2} />}
      >
        <OwnedCourses currentPage={currentPage}></OwnedCourses>
      </Suspense>
    </div>
  );
}
