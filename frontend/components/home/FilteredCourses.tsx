import { CourseItem } from "@/src/lib/definitions";
import CourseCard from "../ui/courses/CourseCard";
import { fetchCoursesPaginated } from "@/src/lib/data";
import Pagination from "../ui/pagination/Pagination";

export default async function FilteredCourses({
  currentPage,
}: {
  currentPage: number;
}) {
  const courses = await fetchCoursesPaginated(currentPage, 12);
  return (
    <>
      <section className="container flex flex-col xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 gap-6 max-sm:px-4">
        {courses.courses.length >= 1 ? (
          courses.courses.map((c: CourseItem) => (
            <CourseCard
              key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              registeredUsers={c.registeredUsers}
            />
          ))
        ) : (
          <p className="">No se han encontrado cursos.</p>
        )}
      </section>

      <div className="mt-10 bg-white dark:bg-slate-800 rounded-lg w-fit p-4 shadow-xl">
        <Pagination totalPages={courses.totalPages} />
      </div>
    </>
  );
}
