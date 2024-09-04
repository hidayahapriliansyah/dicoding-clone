export type CourseLearningPath = {
  name: string;
  totalCourse: number;
  totalStudent: string;
  summary: string;
  courses: Course[];
};

export type Course = {
  link: string;
  image: string;
  imgPlaceholder: string;
  step: number;
  title: string;
  rating: number;
  level: 'Dasar' | 'Pemula' | 'Menengah' | 'Mahir' | 'Profesional';
  summary: string;
  hours: number;
  totalStudent: string;
}
