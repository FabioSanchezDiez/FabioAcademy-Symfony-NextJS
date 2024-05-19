import { fetchCourseById } from "@/src/lib/data";
import { Course } from "@/src/lib/definitions";
import CoursePage from "../ui/courses/CoursePage";

export default async function FullCourse({ id }: { id: number }) {
  const course: Course = await fetchCourseById(id);
  return <CoursePage course={course}></CoursePage>;
}
