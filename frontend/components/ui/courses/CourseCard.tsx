"use client";
import { CourseItem } from "@/src/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import TagYellow from "../elements/TagYellow";
import { usePathname } from "next/navigation";

export default function CourseCard({
  id,
  name,
  image,
  registeredUsers,
}: CourseItem) {
  const pathname = usePathname();

  const isPopularCourse =
    registeredUsers > 15000 ? <TagYellow text="Popular" /> : "";

  const href =
    pathname === "/dashboard/learning"
      ? `/dashboard/watch/${id}`
      : `/courses/${id}`;

  return (
    <>
      <Link href={href} prefetch={true}>
        <article className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl grid grid-cols-3 gap-4 border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700">
          <div className="col-span-1">
            <Image
              src={image}
              alt="Course Logo"
              width={200}
              height={200}
              className="rounded-lg shadow-2xl"
            ></Image>
          </div>
          <div className="col-span-2">
            <p className=" text-lg font-bold">{name}</p>
            <div className="flex gap-4 mt-4">{isPopularCourse}</div>
          </div>
        </article>
      </Link>
    </>
  );
}
