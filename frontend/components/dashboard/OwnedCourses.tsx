import { CourseItem } from "@/src/lib/definitions";
import CourseCard from "../ui/courses/CourseCard";
import { fetchCoursesByOwner } from "@/src/lib/data";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Pagination from "../ui/pagination/Pagination";
import DeleteActionButton from "../ui/elements/DeleteActionButton";

export default async function OwnedCourses({
  currentPage,
}: {
  currentPage: number;
}) {
  const session = await getServerSession(authOptions);
  const courses = await fetchCoursesByOwner(
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
      <section className="container flex flex-col xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 gap-6 max-sm:px-4">
        {courses.courses.length >= 1 ? (
          courses.courses.map((c: CourseItem) => (
            <div key={c.id} className="flex gap-2 flex-col md:flex-row">
              <CourseCard
                id={c.id}
                name={c.name}
                image={c.image}
                registeredUsers={c.registeredUsers}
              />
              <div className="block p-2">
                <DeleteActionButton
                  courseId={c.id}
                  token={session?.user.token!}
                ></DeleteActionButton>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg">
            Todavía no existe soporte nativo para crear cursos desde la
            plataforma, estamos trabajando en ello. Puedes hacerlo desde la API.
          </p>
        )}
      </section>

      {courses.courses.length >= 1 && (
        <div className="mt-10 bg-white dark:bg-slate-800 rounded-lg w-fit p-4 shadow-xl">
          <Pagination totalPages={courses.totalPages} />
        </div>
      )}
    </>
  );
}
