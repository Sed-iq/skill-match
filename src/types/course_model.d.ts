import { ReactNode } from "react";

interface CourseModel {
  title: string;
  description: string;
  logo: ReactNode;
  aurthor: string;
  link: string;
}

interface CourseCategoryModel {
  title: string;
  description: string;
  courses: CourseModel[];
}
