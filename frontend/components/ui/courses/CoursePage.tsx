"use client";
import { Course, Section } from "@/src/lib/definitions";
import Image from "next/image";
import Tag from "../elements/Tag";
import Button from "../elements/Button";
import CourseSections from "./CourseSections";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { enrollUserInCourse } from "@/src/lib/data";
import { useState } from "react";
import Loader from "../elements/Loader";
import Swal from "sweetalert2";

export default function CoursePage({
  course,
  sections,
}: {
  course: Course;
  sections: Section[];
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const publicationDate = new Date(course.publicationDate).toLocaleDateString();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleOnClick = async () => {
    if (!session?.user) {
      router.push("/accounts/login");
    }
    setIsLoading(true);
    const response = await enrollUserInCourse(
      session?.user.email!,
      course.id,
      session?.user.token!
    );
    setIsLoading(false);

    if (response.error) {
      Toast.fire({
        icon: "error",
        title: "Ya estás inscrito en el curso",
      });
      return;
    }

    Toast.fire({
      icon: "success",
      title: "Inscrito correctamente",
    });

    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };
  return (
    <>
      {isLoading && <Loader></Loader>}
      <main className="flex flex-col-reverse md:grid md:grid-cols-10 gap-12 mt-12">
        <section className="p-6 md:col-span-7">
          <h1 className="text-4xl font-black">{course.name}</h1>
          <p className="mt-6 text-lg">{course.description}</p>
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <Tag bgColor="bg-indigo-500">Categoría: {course.category}</Tag>
            <Tag bgColor="bg-fuchsia-500">
              Fecha de publicación: {publicationDate}
            </Tag>
            <Tag bgColor="bg-rose-500">
              Usuarios inscritos: {course.registeredUsers}
            </Tag>
          </div>
          <div className="mt-8">
            {sections.length >= 1 ? (
              <CourseSections sections={sections}></CourseSections>
            ) : (
              <p className="text-center">
                Este curso todavía no tiene contenido, pero puedes inscribirte
                para cuando comience.
              </p>
            )}
          </div>
        </section>
        <section className="md:col-span-3 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-slate-600">
            <Image
              src={course.image}
              alt="Course Logo"
              width={700}
              height={700}
            ></Image>
            <Button
              textContent="Inscribirse al curso"
              textColor="text-white"
              bgColor="bg-zinc-800 dark:bg-slate-700"
              onClick={handleOnClick}
            ></Button>
          </div>
        </section>
      </main>
    </>
  );
}
