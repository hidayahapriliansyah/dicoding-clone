import { CourseLearningPath } from './types';

export const learningPathFe: CourseLearningPath = {
  name: 'Front-End Web Developer',
  summary: 'Kurikulum disusun oleh Dicoding dan pelaku industri di bidang Web Development. Siswa dipersiapkan untuk menjadi Front-End Web Developer sesuai standar kebutuhan industri.',
  totalCourse: 6,
  totalStudent: '479k',
  courses: [
    {
      step: 1,
      title: 'Belajar Dasar Pemrograman Web',
      hours: 45,
      link: 'https://www.dicoding.com/academies/123-belajar-dasar-pemrograman-web',
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_dasar_pemrograman_web_logo_230421141544.jpg',
      level: 'Dasar',
      rating: 4.87,
      summary: 'Pelajari komponen-komponen dasar HTML dan CSS yang merupakan fondasi utama untuk menjadi front-end web developer.',
      totalStudent: '179.8k'
    },
    {
      step: 2,
      title: 'Belajar Dasar Pemrograman JavaScript',
      link: 'https://www.dicoding.com/academies/256-belajar-dasar-pemrograman-javascript',
      totalStudent: '158.4k',
      hours: 46,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_dasar_pemrograman_javascript_logo_230421133231.jpg',
      level: 'Dasar',
      rating: 4.86,
      summary: 'Pelajari dasar JavaScript, dari fundamental, sintaks dan fitur ES6, hingga konsep automation test menggunakan framework populer.',
    },
    {
      step: 3,
      link: 'https://www.dicoding.com/academies/315-belajar-membuat-front-end-web-untuk-pemula',
      title: 'Belajar Membuat Front-End Web untuk Pemula',
      hours: 45,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_front_end_web_pemula_logo_270421095055.jpg',
      level: 'Pemula',
      rating: 4.87,
      summary: 'Pelajari materi mengenai DOM manipulation, Event, dan Web Storage untuk meningkatkan fungsionalitas dan interaktifitas pada website Anda.',
      totalStudent: '100.8k'
    },
    {
      step: 4,
      link: 'https://www.dicoding.com/academies/163-belajar-fundamental-front-end-web-development',
      hours: 80,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_fundamental_front_end_web_development_logo_230421131631.jpg',
      level: 'Menengah',
      rating: 4.88,
      summary: 'Pelajari sintaks ES6, Web Component, dan Build Tools dalam membangun website dengan teknik yang simple, reusable, dan optimized.',
      title: 'Belajar Fundamental Front-End Web Development',
      totalStudent: '29.0k',
    },
    {
      step: 5,
      link: 'https://www.dicoding.com/academies/565-belajar-tools-front-end-web-intermediate',
      title: 'Belajar Tools Front-End Web Intermediate',
      hours: 65,
      image: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:belajar_tools_front_end_web_intermediate_logo_070223112714.png',
      level: 'Mahir',
      rating: 4.85,
      totalStudent: '1.8k',
      summary: 'Pelajari tools berstandar industri dengan Sass, Bootstrap, Lit, Axios, dan Firebase dalam membangun aplikasi web yang efisien dan powerful.'
    },
    {
      step: 6,
      link: 'https://www.dicoding.com/academies/219-menjadi-front-end-web-developer-expert',
      hours: 110,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/menjadi_front_end_web_developer_expert_logo_230421131923.jpg',
      level: 'Profesional',
      rating: 4.89,
      summary: 'Pelajari teknik-teknik expert serta modern dalam membangun website yang optimal pada seluruh perangkat, terutama pada perangkat mobile.',
      title: 'Menjadi Front-End Web Developer Expert',
      totalStudent: '8.8k'
    }
  ]
}