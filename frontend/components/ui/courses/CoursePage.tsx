import { Course, Section } from "@/src/lib/definitions";
import Image from "next/image";
import Tag from "../elements/Tag";
import { UserIcon } from "@heroicons/react/24/outline";
import Button from "../elements/Button";
import CourseSections from "./CourseSections";

export default function CoursePage({
  course,
  sections,
}: {
  course: Course;
  sections: Section[];
}) {
  const publicationDate = new Date(course.publicationDate).toLocaleDateString();
  return (
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
            bgColor="bg-zinc-800 dark:bg-slate-800"
          ></Button>
        </div>
      </section>
    </main>
  );
}
