export type Testimony = {
  image: string;
  description: string;
  name: string;
  profession: string;
  company: string;
  completedClass: string;
};

const testimonies: Testimony[] = [
  {
    image: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-testimony-brian.jpg',
    description: 'Disajikan dengan struktur pembelajaran yang rapi, ilmu-ilmu teknis seperti Kotlin di Dicoding sangat mudah saya pahami dan terapkan sampai sekarang. Dicoding memastikan semua lulusannya punya dasar yang kuat di bidang Android dan bidang lainnya.',
    name: 'Brian Mohammed Catraguna',
    profession: 'Software Engineer',
    company: 'Meta',
    completedClass: 'Android Path'
  },
  {
    image: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-testimony-archie.jpg',
    description: 'Dicoding menawarkan biaya pelatihan yang terjangkau untuk pengalaman belajar pemrograman yang mendalam. Pengetahuan dari program ini memperkuat ilmu fundamental saya dan berkontribusi pada portofolio profesional yang tengah saya bangun.',
    name: 'Made Acarya Mordekhai Karang',
    profession: 'Engineer On Site',
    company: 'PT Integrasi Data Nusantara',
    completedClass: 'Front-End Web & Back-End Path'
  },
  {
    image: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-testimony-karlina.jpg',
    description: 'Dulu, saya sempat tidak percaya diri dengan kemampuan saya. Namun, skills yang saya peroleh dari Dicoding membuat saya berani untuk melamar ke salah satu bank swasta ternama di Indonesia. Akhirnya, saya berhasil diterima sebagai IT Security Specialist di Bank BCA.',
    name: 'Karlina Surya Witanto',
    profession: 'IT Security Specialist',
    company: 'Bank BCA',
    completedClass: 'Machine Learning & Front-End Web Path'
  },
  {
    image: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-testimony-steven.jpg',
    description: 'Menurut saya, teknologi AI yang banyak diandalkan di masa depan membuat seorang developer harus beradaptasi dengan kondisi ini. Oleh karenanya, Dicoding mempersiapkan kelas "Belajar Dasar AI" untuk memastikan saya, sebagai talenta teknologi, siap untuk melangkah maju.',
    name: 'Steven Setiawan',
    profession: 'Full-Stack Engineer',
    company: 'PT Innovine Studio Indonesia',
    completedClass: 'Machine Learning Path'
  },
  {
    image: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-testimony-ricky.jpg',
    description: 'Belajar di Dicoding tidak hanya bermanfaat bagi mereka yang masih pemula dalam hal wawasan teknologi, tetapi juga membantu profesional yang sudah berpengalaman kerja seperti saya untuk dapat memperbaharui keterampilan.',
    name: 'Ricky Tanudjaja',
    profession: 'Software Developer',
    company: 'Samsung Research Indonesia',
    completedClass: 'Back-End & DevOps Engineer Path'
  }
];

export default testimonies;