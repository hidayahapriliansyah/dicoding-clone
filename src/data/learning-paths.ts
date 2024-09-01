export type LearningPaths = 'android' | 'fe' | 'be' | 'ml' | 'ios';

export const learningPaths: { title: string; imgUrl: string; path: LearningPaths, badge: string; }[] = [
  {
    title: 'Android Developer',
    imgUrl: '/images/android-lp.jpg',
    path: 'android',
    badge: '/images/badge-android.png'
  },
  {
    title: 'Back-End Developer',
    imgUrl: '/images/be-lp.jpg',
    path: 'be',
    badge: '/images/badge-be.png'
  },
  {
    title: 'Front-End Web Developer',
    imgUrl: '/images/fe-lp.jpg',
    path: 'fe',
    badge: '/images/badge-fe.png'
  },
  {
    title: 'iOS Developer',
    imgUrl: '/images/ios-lp.jpg',
    path: 'ios',
    badge: '/images/badge-ios.png'
  },
  {
    title: 'Machine Learning Engineer',
    imgUrl: '/images/ml-lp.jpg',
    path: 'ml',
    badge: '/images/badge-ml.png'
  },
]