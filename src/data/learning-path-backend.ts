import { CourseLearningPath } from './types';

export const learningPathBe: CourseLearningPath = {
  name: 'Back-End Developer',
  summary: 'Kurikulum disusun oleh Dicoding bersama AWS beserta pelaku industri Back-End Development. Siswa dipersiapkan untuk menjadi Back-End Developer sesuai kebutuhan industri.',
  totalCourse: 7,
  totalStudent: '475k',
  courses: [
    {
      step: 1,
      title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
      link: 'https://www.dicoding.com/academies/251-cloud-practitioner-essentials-belajar-dasar-aws-cloud',
      hours: 15,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/cloud_practitioner_essentials_belajar_dasar_aws_cloud_logo_230421133823.jpg',
      level: 'Dasar',
      rating: 4.81,
      summary: 'Pelajari materi dasar Cloud dengan menggunakan AWS, dari konsep cloud computing, hingga cara membangun arsitektur yang baik.',
      totalStudent: '182.6k'
    },
    {
      step: 2,
      title: 'Belajar Dasar Pemrograman JavaScript',
      rating: 4.86,
      summary: 'Pelajari dasar JavaScript, dari fundamental, sintaks dan fitur ES6, hingga konsep automation test menggunakan framework populer.',
      totalStudent: '158.4k',
      hours: 46,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_dasar_pemrograman_javascript_logo_230421133231.jpg',
      level: 'Dasar',
      link: 'https://www.dicoding.com/academies/256-belajar-dasar-pemrograman-javascript',
    },
    {
      step: 3,
      link: 'https://www.dicoding.com/academies/261-belajar-membuat-aplikasi-back-end-untuk-pemula',
      title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
      rating: 4.90,
      level: 'Pemula',
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_membuat_aplikasi_back_end_untuk_pemula_logo_230421133303.jpg',
      hours: 45,
      summary: 'Pelajari dasar dalam membangun RESTful API, dari HTTP server, routing, hingga membangun Back-End untuk aplikasi yang nyata.',
      totalStudent: '109.2k'
    },
    {
      step: 4,
      link: 'https://www.dicoding.com/academies/266-architecting-on-aws-membangun-arsitektur-cloud-di-aws',
      title: 'Architecting on AWS (Membangun Arsitektur Cloud di AWS)',
      hours: 40,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/architecting_on_aws_membangun_arsitektur_cloud_di_aws_logo_230421133324.jpg',
      level: 'Menengah',
      rating: 4.83,
      summary: 'Pelajari cara membangun arsitektur cloud di AWS, dari yang sederhana dengan Amazon S3 hingga yang canggih dengan teknologi serverless.',
      totalStudent: '13.9k'
    },
    {
      step: 5,
      link: 'https://www.dicoding.com/academies/610-menjadi-node-js-application-developer',
      title: 'Menjadi Node.js Application Developer',
      image: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:menjadi_node_js_application_developer_logo_191023134559.jpg',
      hours: 57,
      level: 'Menengah',
      rating: 4.81,
      summary: 'Pelajari core module Node.js secara mendalam agar mampu membangun aplikasi untuk berbagai tujuan dengan menggunakan JavaScript.',
      totalStudent: '814'
    },
    {
      step: 6,
      link: 'https://www.dicoding.com/academies/271-belajar-fundamental-aplikasi-back-end',
      hours: 90,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_fundamental_aplikasi_back_end_logo_230421133405.jpg',
      level: 'Menengah',
      rating: 4.90,
      summary: 'Pelajari teknologi dalam membangun RESTful API yang canggih seperti Database, Storage, hingga Authentication dan Authorization.',
      title: 'Belajar Fundamental Aplikasi Back-End',
      totalStudent: '6.4k'
    },
    {
      step: 7,
      link: 'https://www.dicoding.com/academies/276-menjadi-back-end-developer-expert',
      hours: 82,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/menjadi_back_end_developer_expert_logo_230421133615.jpg',
      level: 'Mahir',
      rating: 4.90,
      summary: 'Pelajari teknik Automation Testing, Clean Architecture, CI/CD, Security, dan Scalability dalam membangun RESTful API berskala industri.',
      title: 'Menjadi Back-End Developer Expert',
      totalStudent: '3.4k'
    }
  ]
}