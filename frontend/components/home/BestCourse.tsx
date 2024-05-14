import { fetchMostPopularCourse } from "@/src/lib/data";
import { Course } from "@/src/lib/definitions";
import CoursePanel from "../ui/courses/CoursePanel";

export default async function BestCourse() {
  const course: Course = await fetchMostPopularCourse();
  return (
    <section className="max-sm:px-4">
      <CoursePanel
        id={course.id}
        name={course.name}
        description={course.description}
        registeredUsers={course.registeredUsers}
        publicationDate={course.publicationDate}
        image={course.image}
        category={course.category}
      ></CoursePanel>
    </section>
  );
}
