import { Lesson } from "@/src/lib/definitions";
import { BiVideo } from "react-icons/bi";

export default function LessonComponent({ lesson }: { lesson: Lesson }) {
  return (
    <div className="px-6 py-3 flex items-center gap-2">
      <BiVideo className="cursor-pointer"></BiVideo>
      <p className="cursor-pointer">{lesson.title}</p>
    </div>
  );
}
