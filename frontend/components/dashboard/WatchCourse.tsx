import { fetchLessonById } from "@/src/lib/data";
import { Lesson } from "@/src/lib/definitions";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Video from "../ui/elements/Video";

export default async function WatchCourse({ lessonId }: { lessonId: number }) {
  const session = await getServerSession(authOptions);
  const lesson: Lesson = await fetchLessonById(lessonId, session?.user.token!);
  return (
    <div>
      <Video lesson={lesson}></Video>
    </div>
  );
}
