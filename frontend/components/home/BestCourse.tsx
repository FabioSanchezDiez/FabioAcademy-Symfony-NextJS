import { fetchCourse } from "@/src/lib/data";
import { Course } from "@/src/lib/definitions";
import CoursePanel from "../ui/CoursePanel";

export default async function BestCourse() {
  const course: Course = await fetchCourse(9);
  return (
    <section>
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
