"use client";
import { Lesson, Section } from "@/src/lib/definitions";
import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import LessonComponent from "./LessonComponent";

export default function SectionComponent({
  section,
  watch = false,
  courseId = 1,
}: {
  section: Section;
  watch?: boolean;
  courseId?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <article
        className={`p-4 bg-gray-300 dark:bg-slate-700 border-solid border-black border-x border-t last:border flex items-center cursor-pointer ${
          isOpen && "border"
        }`}
        onClick={() => setIsOpen((o) => !o)}
      >
        {isOpen ? (
          <MdArrowDropUp className="w-6 h-6"></MdArrowDropUp>
        ) : (
          <MdArrowDropDown className="w-6 h-6"></MdArrowDropDown>
        )}
        <p className="text-lg">{section.title}</p>
      </article>
      {isOpen && (
        <div className="flex flex-col gap-2 bg-gray-200 dark:bg-slate-600 border-solid border-black border-x">
          {section.lessons.map((l: Lesson) => (
            <LessonComponent
              key={l.id}
              lesson={l}
              watch={watch}
              courseId={courseId}
            ></LessonComponent>
          ))}
        </div>
      )}
    </>
  );
}
