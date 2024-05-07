import Hero from "@/components/home/Hero";
import Courses from "@/components/home/Courses";
import { Suspense } from "react";
import CoursesSkeleton from "@/components/skeletons/CoursesSkeleton";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <section className="container mt-2">
        <h2 className="mb-6 text-2xl font-bold ml-2">
          Nuestros cursos más populares{" "}
        </h2>

        <Suspense fallback={<CoursesSkeleton />}>
          <Courses></Courses>
        </Suspense>
      </section>
    </>
  );
}
