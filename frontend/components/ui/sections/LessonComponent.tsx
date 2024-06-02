"use client";
import { Lesson } from "@/src/lib/definitions";
import { useRouter } from "next/navigation";
import { BiVideo } from "react-icons/bi";

export default function LessonComponent({
  lesson,
  watch = false,
  courseId = 1,
}: {
  lesson: Lesson;
  watch?: boolean;
  courseId?: number;
}) {
  const router = useRouter();
  const handleOnClick = (lessonId: number) => {
    router.push(`/dashboard/watch/${courseId}/${lessonId}`);
  };
  return (
    <div
      className="px-6 py-3 flex items-center gap-2 cursor-pointer"
      onClick={() => watch && handleOnClick(lesson.id)}
    >
      <BiVideo className="cursor-pointer"></BiVideo>
      <p className="cursor-pointer">{lesson.title}</p>
    </div>
  );
}
