import {
  fetchCourseById,
  fetchLessonById,
  fetchSectionsByCourse,
} from "@/src/lib/data";
import { Course, Lesson, Section } from "@/src/lib/definitions";
import React from "react";
import CourseWatch from "../ui/courses/CourseWatch";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function WatchCourse({
  id,
  lessonId,
}: {
  id: number;
  lessonId: number;
}) {
  const session = await getServerSession(authOptions);
  const course: Course = await fetchCourseById(id);
  const sections: Section[] = await fetchSectionsByCourse(id);
  const lesson: Lesson = await fetchLessonById(lessonId, session?.user.token!);
  return (
    <CourseWatch
      course={course}
      sections={sections}
      lesson={lesson}
    ></CourseWatch>
  );
}
