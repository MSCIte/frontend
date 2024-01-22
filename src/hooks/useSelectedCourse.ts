import { useState } from "react";
import { Course } from "~/sampleData";

export const useSelectedCourse = (defaultCourse: Course | null) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(
    defaultCourse,
  );

  const updateSelectedCourse = (newCourse: Course) => {
    setSelectedCourse(newCourse);
  };

  return { selectedCourse, updateSelectedCourse };
};
