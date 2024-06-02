import { Section } from "@/src/lib/definitions";
import SectionComponent from "../sections/SectionComponent";

export default function CourseSections({
  sections,
  watch = false,
  courseId = 1,
}: {
  sections: Section[];
  watch?: boolean;
  courseId?: number;
}) {
  return (
    <section className="flex flex-col">
      {sections.map((s) => (
        <SectionComponent
          key={s.id}
          section={s}
          watch={watch}
          courseId={courseId}
        ></SectionComponent>
      ))}
    </section>
  );
}
