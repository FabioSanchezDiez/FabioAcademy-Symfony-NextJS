import { CourseItem } from "@/src/lib/definitions";

export default function CourseCard({
  id,
  name,
  image,
  registeredUsers,
}: CourseItem) {
  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <div>{image}</div>
      <div>{registeredUsers}</div>
    </>
  );
}
