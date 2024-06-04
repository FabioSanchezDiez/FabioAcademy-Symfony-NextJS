import { Course, Lesson } from "@/src/lib/definitions";
import CourseCard from "../ui/courses/CourseCard";
import { fetchCoursesByUser } from "@/src/lib/data";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Pagination from "../ui/pagination/Pagination";
import Link from "next/link";
import Button from "../ui/elements/Button";

export default async function MyCourses({
  currentPage,
}: {
  currentPage: number;
}) {
  const session = await getServerSession(authOptions);
  const courses = await fetchCoursesByUser(
    session?.user.email!,
    session?.user.token!,
    currentPage,
    10
  );
  return (
    <>
      <h1 className="text-2xl font-bold mb-10">
        Bienvenido de nuevo,{" "}
        <span className="text-darkenLightBlue">{session?.user.name}</span>
      </h1>
      <section className="container flex flex-col xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 gap-6 max-sm:px-4">
        {courses.courses.length >= 1 ? (
          courses.courses.map((c: { course: Course; firstLesson: Lesson }) => (
            <CourseCard
              key={c.course.id}
              id={c.course.id}
              name={c.course.name}
              image={c.course.image}
              registeredUsers={c.course.registeredUsers}
              firstLesson={c.firstLesson?.id}
            />
          ))
        ) : (
          <p className="text-lg">Todavía no estás inscrito a ningún curso</p>
        )}
      </section>

      {courses.courses.length >= 1 ? (
        <div className="mt-10 bg-white dark:bg-slate-800 rounded-lg w-fit p-4 shadow-xl">
          <Pagination totalPages={courses.totalPages} />
        </div>
      ) : (
        <Link href={"/courses"}>
          <Button
            textContent="Ver cursos disponibles"
            bgColor="bg-darkenLightBlue mt-6 w-60"
            textColor="text-white"
          ></Button>
        </Link>
      )}
    </>
  );
}
