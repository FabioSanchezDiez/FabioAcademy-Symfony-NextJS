import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { checkUserEnrolled } from "@/src/lib/data";
import { getServerSession } from "next-auth";
import React from "react";

export default async function CheckEnrolled({
  courseId,
}: {
  courseId: number;
}) {
  const session = await getServerSession(authOptions);
  const isEnrolled = await checkUserEnrolled(
    session?.user.email!,
    courseId,
    session?.user.token!
  );
  return <></>;
}
