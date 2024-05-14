import { CourseItem } from "@/src/lib/definitions";
import CourseCard from "../ui/courses/CourseCard";
import { fetchPopularCourses } from "@/src/lib/data";

export default async function FilteredCourses() {
  const courses = await fetchPopularCourses(0, 30000, 12);
  return (
    <section className="container flex flex-col xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 gap-6 max-sm:px-4">
      {courses.map((c: CourseItem) => (
        <CourseCard
          key={c.id}
          id={c.id}
          name={c.name}
          image={c.image}
          registeredUsers={c.registeredUsers}
        />
      ))}
    </section>
  );
}
