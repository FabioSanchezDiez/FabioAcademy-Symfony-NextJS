import { fetchCourseById, fetchSectionsByCourse } from "@/src/lib/data";
import { Course, Section } from "@/src/lib/definitions";
import React from "react";
import CourseWatch from "../ui/courses/CourseWatch";

export default async function WatchCourse({ id }: { id: number }) {
  const course: Course = await fetchCourseById(id);
  const sections: Section[] = await fetchSectionsByCourse(id);
  return <CourseWatch course={course} sections={sections}></CourseWatch>;
}
