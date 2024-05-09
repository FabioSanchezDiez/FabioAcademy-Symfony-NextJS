import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import { Suspense } from "react";
import CoursesSkeleton from "@/components/skeletons/CoursesSkeleton";
import BestCourse from "@/components/home/BestCourse";
import CoursePanelSkeleton from "@/components/skeletons/CoursePanelSkeleton";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <section className="container mt-2">
        <h2 className="mb-6 text-2xl font-bold ml-2">
          Nuestros cursos más populares
        </h2>

        <Suspense fallback={<CoursesSkeleton />}>
          <PopularCourses></PopularCourses>
        </Suspense>

        <h2 className="mb-6 text-2xl font-bold ml-2 mt-10">
          Nuestra mejor recomendación para los usuarios
        </h2>
        <Suspense fallback={<CoursePanelSkeleton />}>
          <BestCourse></BestCourse>
        </Suspense>
      </section>
    </>
  );
}
