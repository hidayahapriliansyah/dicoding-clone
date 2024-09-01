import { CourseLearningPath } from './types';

export const learningPathAndroid: CourseLearningPath = {
  name: 'Android Developer',
  totalCourse: 6,
  totalStudent: '273k',
  summary: 'Kurikulum didesain dengan persetujuan dari Tim Google Android untuk mempersiapkan developer Android standar Global. Dicoding adalah Google Developer Authorized Training Partner.',
  courses: [
    {
      step: 1,
      link: 'https://www.dicoding.com/academies/80-memulai-pemrograman-dengan-kotlin',
      title: 'Memulai Pemrograman dengan Kotlin',
      hours: 50,
      level: 'Dasar',
      summary: 'Pelajari dasar bahasa pemrograman, functional programming, object-oriented programming (OOP), serta concurrency dengan menggunakan Kotlin.',
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/memulai_pemrograman_dengan_kotlin_logo_230421132137.jpg',
      rating: 4.84,
      totalStudent: '60.0k'
    },
    {
      step: 2,
      link: 'https://www.dicoding.com/academies/51-belajar-membuat-aplikasi-android-untuk-pemula',
      title: 'Belajar Membuat Aplikasi Android untuk Pemula',
      hours: 60,
      level: 'Pemula',
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_membuat_aplikasi_android_untuk_pemula_logo_230421132330.jpg',
      rating: 4.87,
      totalStudent: '165.5k',
      summary: 'Buat aplikasi pertamamu pada Android Studio dengan mempelajari dasar Activity, Intent, View & ViewGroup, Style & Theme sampai RecyclerView.'
    },
    {
      step: 3,
      link: 'https://www.dicoding.com/academies/51-belajar-membuat-aplikasi-android-untuk-pemula',
      title: 'Belajar Fundamental Aplikasi Android',
      hours: 140,
      level: 'Menengah',
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_fundamental_aplikasi_android_logo_230421132359.jpg',
      rating: 4.84,
      totalStudent: '41.9k',
      summary: 'Pelajari skill Android dengan kurikulum terlengkap yang dibutuhkan perusahaan. Mulai dari UI/UX, background process, API sampai database.'
    },
    {
      step: 4,
      link: 'https://www.dicoding.com/academies/352-belajar-pengembangan-aplikasi-android-intermediate',
      title: 'Belajar Pengembangan Aplikasi Android Intermediate',
      hours: 150,
      level: 'Mahir',
      rating: 4.82,
      totalStudent: '7.4k',
      summary: 'Tingkatkan pengalaman pengguna dengan mempelajari Custom View, Animation, Localization, Media, Location, Testing, dan Advanced Database.',
      image: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:belajar_pengembangan_aplikasi_android_intermediate_logo_140222092310.png',
    },
    {
      step: 5,
      rating: 4.87,
      title: 'Belajar Prinsip Pemrograman SOLID',
      level: 'Menengah',
      hours: 15,
      summary: 'Pelajari kelima prinsip desain yang merupakan pedoman untuk rancangan kode yang baik pada pemrograman berorientasi objek (OOP).',
      totalStudent: '41.3k',
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_prinsip_pemrograman_solid_logo_230421132206.jpg',
      link: 'https://www.dicoding.com/academies/169-belajar-prinsip-pemrograman-solid',
    },
    {
      step: 6,
      link: 'https://www.dicoding.com/academies/165-menjadi-android-developer-expert',
      rating: 4.79,
      level: 'Profesional',
      hours: 90,
      totalStudent: '6.0k',
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/menjadi_android_developer_expert_logo_230421132521.jpg',
      summary: 'Saatnya menjadi Android Expert dengan belajar Clean Architecture, Reactive, Dependency Injection, Modularization, Performance, dan Security.',
      title: 'Menjadi Android Developer Expert'
    }
  ]
}