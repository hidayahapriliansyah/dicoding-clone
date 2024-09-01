import { CourseLearningPath } from './types';

export const learningPathIos: CourseLearningPath = {
  name: 'iOS Developer',
  summary: 'Kurikulum disusun oleh Dicoding dan pelaku industri di bidang iOS Development. Siswa dipersiapkan untuk menjadi iOS Developer sesuai standar kebutuhan industri.',
  totalCourse: 5,
  totalStudent: '56k',
  courses: [
    {
      step: 1,
      link: 'https://www.dicoding.com/academies/145-memulai-pemrograman-dengan-swift',
      hours: 40,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/memulai_pemrograman_dengan_swift_logo_230421132022.jpg,',
      title: 'Memulai Pemrograman Dengan Swift',
      level: 'Dasar',
      rating: 4.84,
      summary: 'Belajar bahasa Swift buat kamu yang ingin mempelajari konsep dasar pemrograman dalam mengembangkan aplikasi iOS, iPadOS, dan macOS.',
      totalStudent: '8.2k',
    },
    {
      step: 2,
      link: 'https://www.dicoding.com/academies/171-belajar-membuat-aplikasi-ios-untuk-pemula',
      hours: 40,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_membuat_aplikasi_ios_untuk_pemula_logo_230421144231.jpg',
      level: 'Pemula',
      rating: 4.84,
      summary: 'Pelajari cara membuat aplikasi pertamamu dengan Xcode. Kelas ini mengajarkan dasar yang dibutuhkan mulai dari Controller sampai TableViews.',
      title: 'Belajar Membuat Aplikasi iOS untuk Pemula',
      totalStudent: '3.5k'
    },
    {
      step: 3,
      link: 'https://www.dicoding.com/academies/202-belajar-fundamental-aplikasi-ios',
      hours: 4.82,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_fundamental_aplikasi_ios_logo_230421144334.jpg',
      level: 'Menengah',
      rating: 4.82,
      summary: 'Pelajari komponen fundamental iOS berdasarkan teknik yang digunakan industri mulai dari App Design, SwiftUI, Networking, sampai Database.',
      title: 'Belajar Fundamental Aplikasi iOS',
      totalStudent: '1.3k'
    },
    {
      step: 4,
      link: 'https://www.dicoding.com/academies/169-belajar-prinsip-pemrograman-solid',
      hours: 15,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_prinsip_pemrograman_solid_logo_230421132206.jpg',
      level: 'Menengah',
      rating: 4.87,
      summary: 'Pelajari kelima prinsip desain yang merupakan pedoman untuk rancangan kode yang baik pada pemrograman berorientasi objek (OOP).',
      title: 'Belajar Prinsip Pemrograman SOLID',
      totalStudent: '41.3k'
    },
    {
      step: 5,
      link: 'https://www.dicoding.com/academies/209-menjadi-ios-developer-expert',
      hours: 70,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/menjadi_ios_developer_expert_logo_230421132134.jpg',
      level: 'Mahir',
      rating: 4.85,
      summary: 'Saatnya jadi iOS Expert dengan belajar Clean Code, Design Pattern, Clean Architecture, Reactive Programming, DI, Modularization, dan TDD.',
      title: 'Menjadi iOS Developer Expert',
      totalStudent: '999'
    }
  ]
}