import { Course } from "@/src/lib/definitions";
import Image from "next/image";
import Tag from "../elements/Tag";
import TagYellow from "../elements/TagYellow";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function CoursePage({ course }: { course: Course }) {
  const publicationDate = new Date(course.publicationDate).toLocaleDateString();
  return (
    <main className="flex gap-12 mt-12">
      <section className="p-6">
        <h1 className="text-4xl font-black">{course.name}</h1>
        <p className="mt-6 text-lg">{course.description}</p>
        <div className="flex gap-6 mt-8">
          <Tag bgColor="bg-indigo-500">Categoría: {course.category}</Tag>
          <Tag bgColor="bg-fuchsia-500">
            Fecha de publicación: {publicationDate}
          </Tag>
        </div>
      </section>
      <section>
        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700">
          <Image
            src={course.image}
            alt="Course Logo"
            width={700}
            height={700}
            className="rounded-lg shadow-2xl"
          ></Image>
          <div></div>
        </div>
      </section>
    </main>
  );
}
