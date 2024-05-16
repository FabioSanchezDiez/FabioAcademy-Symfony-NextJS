import { CourseItem } from "@/src/lib/definitions";
import CourseCard from "../ui/courses/CourseCard";
import { fetchSearchedCourses } from "@/src/lib/data";

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
    <section className="container flex flex-col xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 gap-6 max-sm:px-4">
      {courses.length >= 1 ? (
        courses.map((c: CourseItem) => (
          <CourseCard
            key={c.id}
            id={c.id}
            name={c.name}
            image={c.image}
            registeredUsers={c.registeredUsers}
          />
        ))
      ) : (
        <p className="text-center">
          No se han encontrado cursos para &quot;{query}&quot;
        </p>
      )}
    </section>
  );
}
