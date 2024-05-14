import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import { Suspense } from "react";
import CoursesSkeleton from "@/components/skeletons/CoursesSkeleton";
import BestCourse from "@/components/home/BestCourse";
import CoursePanelSkeleton from "@/components/skeletons/CoursePanelSkeleton";
import InfoDivider from "@/components/ui/structure/InfoDivider";
import Button from "@/components/ui/elements/Button";
import Link from "next/link";

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

        <div className="mt-16 mb-12 p-2">
          <InfoDivider>
            <div>
              <p className="p-8 text-slate-50">
                <span className="font-bold text-lg">¿Eres profesor?</span>{" "}
                Regístrate para poder comenzar a subir tus cursos.
              </p>
            </div>
            <div className="pr-8">
              <Link href={"/accounts/register"}>
                <Button
                  textContent="Registrarse como profesor"
                  bgColor="bg-darkenLightBlue"
                  textColor="text-white"
                ></Button>
              </Link>
            </div>
          </InfoDivider>
        </div>

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
