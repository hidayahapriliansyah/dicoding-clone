import { CourseLearningPath } from './types';

export const learningPathMl: CourseLearningPath = {
  name: 'Machine Learning Engineer',
  summary: 'Kurikulum lengkap yang disusun oleh Dicoding bersama IBM beserta pelaku industri. Siswa dipersiapkan untuk menjadi Machine Learning Engineer sesuai standar kebutuhan industri.',
  totalCourse: 6,
  totalStudent: '316k',
  courses: [
    {
      step: 1,
      link: 'https://www.dicoding.com/academies/177-belajar-dasar-visualisasi-data',
      title: 'Belajar Dasar Visualisasi Data',
      hours: 16,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_dasar_visualisasi_data_logo_230421131758.jpg',
      level: 'Dasar',
      rating: 4.86,
      summary: 'Pelajari teknik dasar untuk representasi hasil secara visual sehingga dapat menceritakan dan mempresentasikan data secara efektif.',
      totalStudent: '93.1k'
    },
    {
      step: 2,
      link: 'https://www.dicoding.com/academies/86-memulai-pemrograman-dengan-python',
      title: 'Memulai Pemrograman dengan Python',
      hours: 35,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/memulai_pemrograman_dengan_python_logo_230421132353.jpg',
      level: 'Dasar',
      rating: 4.80,
      summary: 'Pelajari dasar pemrograman Python hingga library populer yang menjadi landasan tren industri seperti data science dan machine learning.',
      totalStudent: '115.6k'
    },
    {
      step: 3,
      link: 'https://www.dicoding.com/academies/184-belajar-machine-learning-untuk-pemula',
      hours: 30,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_machine_learning_untuk_pemula_logo_230421141649.jpg',
      level: 'Pemula',
      rating: 4.83,
      summary: 'Pelajari materi dasar pengembangan machine learning dan langkah menciptakan model machine learning pertamamu untuk memproses data.',
      title: 'Belajar Machine Learning untuk Pemula',
      totalStudent: '91.1k'
    },
    {
      step: 4,
      link: 'https://www.dicoding.com/academies/185-belajar-pengembangan-machine-learning',
      hours: 90,
      title: 'Belajar Pengembangan Machine Learning',
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_pengembangan_machine_learning_logo_230421141730.jpg',
      level: 'Menengah',
      rating: 4.83,
      summary: 'Pelajari berbagai penerapan deep learning mulai dari klasifikasi gambar dan teks, time series, sistem rekomendasi, hingga Generative AI.',
      totalStudent: '9.3k',
    },
    {
      step: 5,
      link: 'https://www.dicoding.com/academies/319-machine-learning-terapan',
      hours: 40,
      image: 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/machine_learning_terapan_logo_290421140248.jpg',
      level: 'Mahir',
      rating: 4.87,
      summary: 'Pelajari penerapan machine learning dengan real-world projects mulai dari predictive analytics, sentiment analysis, dan sistem rekomendasi.',
      title: 'Machine Learning Terapan',
      totalStudent: '4.6k'
    },
    {
      step: 6,
      link: 'https://www.dicoding.com/academies/443-machine-learning-operations-mlops',
      hours: 45,
      image: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:machine_learning_operations_mlops_logo_220722095304.png',
      level: 'Mahir',
      rating: 4.60,
      summary: 'Pelajari proses pengembangan dan pengoperasian sistem machine learning dalam lingkup produksi dengan menerapkan berbagai prinsip MLOps.',
      title: 'Machine Learning Operations (MLOps)',
      totalStudent: '2.8k'
    }
  ]
}