export type Course = {
  id: number;
  name: string;
  description: string;
  registeredUsers: number;
  publicationDate: Date;
  image: string;
  category: string;
};

export type CourseItem = Pick<
  Course,
  "id" | "name" | "image" | "registeredUsers"
>;
