import { fetchCourseById, fetchSectionsByCourse } from "@/src/lib/data";
import { Course, Section } from "@/src/lib/definitions";
import CoursePage from "../ui/courses/CoursePage";

export default async function FullCourse({ id }: { id: number }) {
  const course: Course = await fetchCourseById(id);
  const sections: Section[] = await fetchSectionsByCourse(id);
  return <CoursePage course={course} sections={sections}></CoursePage>;
}
