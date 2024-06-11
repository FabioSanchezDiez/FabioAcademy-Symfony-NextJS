import { fetchPopularCourses } from "@/src/lib/data";
import CourseCard from "../ui/courses/CourseCard";
import { CourseItem } from "@/src/lib/definitions";

export default async function PopularCourses() {
  const courses = await fetchPopularCourses(15000, 30000, 6);

  return (
    <section className="container flex flex-col xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 gap-6 max-sm:px-4">
      {courses.map(({ id, name, image, registeredUsers }: CourseItem) => (
        <CourseCard
          key={id}
          id={id}
          name={name}
          image={image}
          registeredUsers={registeredUsers}
        />
      ))}
    </section>
  );
}
