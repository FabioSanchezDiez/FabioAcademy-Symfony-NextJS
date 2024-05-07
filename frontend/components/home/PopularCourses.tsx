import { fetchPopularCourses } from "@/src/lib/data";
import CourseCard from "../ui/CourseCard";
import { CourseItem } from "@/src/lib/definitions";

export default async function PopularCourses() {
  const courses = await fetchPopularCourses();
  return (
    <section className="container">
      {courses.map((c: CourseItem) => (
        <CourseCard
          key={c.id}
          id={c.id}
          name={c.name}
          image={c.image}
          registeredUsers={c.registeredUsers}
        />
      ))}
      ;
    </section>
  );
}
