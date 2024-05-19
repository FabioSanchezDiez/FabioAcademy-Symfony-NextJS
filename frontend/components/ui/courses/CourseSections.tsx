import { Section } from "@/src/lib/definitions";
import SectionComponent from "../sections/SectionComponent";

export default function CourseSections({ sections }: { sections: Section[] }) {
  return (
    <section className="flex flex-col">
      {sections.map((s) => (
        <SectionComponent key={s.id} section={s}></SectionComponent>
      ))}
    </section>
  );
}
