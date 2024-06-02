"use client";
import { Course, Section } from "@/src/lib/definitions";
import React from "react";
import Video from "../elements/Video";
import CourseSections from "./CourseSections";

export default function CourseWatch({
  course,
  sections,
}: {
  course: Course;
  sections: Section[];
}) {
  console.log(sections);
  return (
    <>
      <main className="mt-16">
        <h1 className="text-3xl font-bold my-6">{course.name}</h1>
        {sections.length >= 1 ? (
          <section className="flex justify-between gap-12">
            <article>
              <Video></Video>
            </article>
            <article className="w-full">
              <CourseSections sections={sections}></CourseSections>
            </article>
          </section>
        ) : (
          <p className="text-lg">Este curso todavía no tiene contenido</p>
        )}
      </main>
    </>
  );
}
