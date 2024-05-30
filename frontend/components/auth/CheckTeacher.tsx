"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CheckTeacher() {
  const { data: session } = useSession();
  const router = useRouter();
  session?.user.isTeacher === false && router.push("/");
  return <></>;
}
