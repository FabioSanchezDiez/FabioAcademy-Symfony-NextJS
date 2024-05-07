import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Suspense fallback={<div>Cargando...</div>}>
        <PopularCourses></PopularCourses>
      </Suspense>
    </>
  );
}
