import { fetchPopularCourses } from "@/src/lib/data";
import CourseCard from "../ui/CourseCard";
import { CourseItem } from "@/src/lib/definitions";

export default async function PopularCourses() {
  const courses = await fetchPopularCourses(15000, 30000, 6);
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
