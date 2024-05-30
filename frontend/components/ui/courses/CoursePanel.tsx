import { Course } from "@/src/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import TagYellow from "../elements/TagYellow";

export default function CoursePanel({
  id,
  name,
  description,
  registeredUsers,
  publicationDate,
  image,
  category,
}: Course) {
  const isPopularCourse =
    registeredUsers > 100 ? <TagYellow text="El más visto" /> : "";

  return (
    <>
      <Link href={`/courses/${id}`} prefetch={true}>
        <article className="p-6 flex flex-col lg:flex-row gap-8 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700">
          <div className="grid place-items-center">
            <Image
              src={image}
              alt="Course Logo"
              width={650}
              height={650}
              className="rounded-lg shadow-2xl"
            ></Image>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold">{name}</p>
            <p className="text-lg dark:text-slate-200 mt-4">{description}</p>
            <div className="flex gap-4 mt-4">{isPopularCourse}</div>
          </div>
        </article>
      </Link>
    </>
  );
}
