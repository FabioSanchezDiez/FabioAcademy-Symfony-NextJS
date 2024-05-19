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

export type Section = {
  id: number;
  title: string;
  sectionOrder: number;
  lessons: [];
}

export type Lesson = {
  id: number;
  title: string;
  lessonOrder: number;
  video: string;
}
