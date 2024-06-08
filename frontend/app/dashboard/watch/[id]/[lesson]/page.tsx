import CheckEnrolled from "@/components/auth/CheckEnrolled";
import WatchCourse from "@/components/dashboard/WatchCourse";
import CourseVideoSkeleton from "@/components/skeletons/CourseVideoSkeleton";
import CourseSections from "@/components/ui/courses/CourseSections";
import { fetchCourseById, fetchSectionsByCourse } from "@/src/lib/data";
import { Course, Section } from "@/src/lib/definitions";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: { id: number; lesson: number };
}) {
  const sections: Section[] = await fetchSectionsByCourse(params.id);
  const course: Course = await fetchCourseById(params.id);

  return (
    <>
      <Suspense>
        <CheckEnrolled courseId={params.id}></CheckEnrolled>
      </Suspense>
      <main className="mt-16">
        <h1 className="text-3xl font-bold my-10 max-md:px-6">{course.name}</h1>
        {sections.length >= 1 ? (
          <>
            <section className="flex justify-between gap-12 flex-col xl:flex-row max-md:px-6">
              <article>
                <Suspense
                  fallback={<CourseVideoSkeleton></CourseVideoSkeleton>}
                  key={params.id + params.lesson}
                >
                  <WatchCourse lessonId={params.lesson}></WatchCourse>
                </Suspense>
              </article>
              <article className="w-full">
                <CourseSections
                  sections={sections}
                  watch={true}
                  courseId={course.id}
                ></CourseSections>
              </article>
            </section>
          </>
        ) : (
          <p className="text-lg">Este curso todavía no tiene contenido</p>
        )}
      </main>
    </>
  );
}
