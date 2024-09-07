import { create } from 'zustand';
import { LearningPaths } from '../data/learning-paths';

type LearningPathCourse = {
  path: LearningPaths;
  setPath: (data: LearningPaths) => void;
};

export const useLearningPathCourse = create<LearningPathCourse>((set) => ({
  path: 'android',
  setPath: (data: LearningPaths) => set({ path: data }),
}))