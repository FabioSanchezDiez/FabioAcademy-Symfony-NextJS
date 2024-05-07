import { CourseItem } from "@/src/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import TagBlue from "./TagBlue";
import TagYellow from "./TagYellow";

export default function CourseCard({
  id,
  name,
  image,
  registeredUsers,
}: CourseItem) {
  const isPopularCourse =
    registeredUsers > 15000 ? <TagYellow text="Popular" /> : "";

  return (
    <>
      <Link href={`/courses/${id}`}>
        <article className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-2xl grid grid-cols-3 border-slate-600">
          <div className="col-span-1">
            <Image
              src={image}
              alt="Course Logo"
              width={200}
              height={200}
              className="rounded-lg"
            ></Image>
          </div>
          <div className="col-span-2">
            <p className="text-2xl font-bold">{name}</p>
            <div className="flex gap-4 mt-4">
              <TagBlue text={registeredUsers} />
              {isPopularCourse}
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
