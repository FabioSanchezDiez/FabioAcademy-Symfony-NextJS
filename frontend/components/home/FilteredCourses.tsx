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
  const hasCourses = courses.courses.length >= 1;

  return (
    <>
      <section className="container flex flex-col xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 gap-6">
        {hasCourses ? (
          courses.courses.map(
            ({ id, name, image, registeredUsers }: CourseItem) => (
              <CourseCard
                key={id}
                id={id}
                name={name}
                image={image}
                registeredUsers={registeredUsers}
              />
            )
          )
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
