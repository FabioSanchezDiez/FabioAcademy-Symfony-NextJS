import { Course } from "@/src/lib/definitions";
import Image from "next/image";
import Tag from "../elements/Tag";
import { UserIcon } from "@heroicons/react/24/outline";
import Button from "../elements/Button";

export default function CoursePage({ course }: { course: Course }) {
  const publicationDate = new Date(course.publicationDate).toLocaleDateString();
  return (
    <main className="flex flex-col md:flex-row gap-12 mt-12">
      <section className="p-6">
        <h1 className="text-4xl font-black">{course.name}</h1>
        <p className="mt-6 text-lg">{course.description}</p>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <Tag bgColor="bg-indigo-500">Categoría: {course.category}</Tag>
          <Tag bgColor="bg-fuchsia-500">
            Fecha de publicación: {publicationDate}
          </Tag>
        </div>
      </section>
      <section>
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-slate-600">
          <Image
            src={course.image}
            alt="Course Logo"
            width={700}
            height={700}
          ></Image>
          <div className="flex gap-2 items-center p-4">
            <p className="text-md">Inscritos: {course.registeredUsers}</p>
            <UserIcon className="w-4 h-4"></UserIcon>
          </div>
          <Button
            textContent="Inscribirse"
            textColor="text-white"
            bgColor="bg-black"
          ></Button>
        </div>
      </section>
    </main>
  );
}
