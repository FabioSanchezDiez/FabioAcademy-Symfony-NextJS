import { CourseItem } from "@/src/lib/definitions";
import CourseCard from "../ui/courses/CourseCard";
import { fetchSearchedCourses } from "@/src/lib/data";
import Pagination from "../ui/pagination/Pagination";

type SearchedCoursesProps = {
  query: string;
  currentPage: number;
};

export default async function SearchedCourses({
  query,
  currentPage,
}: SearchedCoursesProps) {
  const courses = await fetchSearchedCourses(query, currentPage, 10);
  return (
    <>
      <section className="container flex flex-col xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 gap-6">
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
          <p>No se han encontrado cursos para &quot;{query}&quot;</p>
        )}
      </section>

      <div className="mt-10 bg-white dark:bg-slate-800 rounded-lg w-fit p-4 shadow-xl">
        <Pagination totalPages={courses.totalPages} />
      </div>
    </>
  );
}
