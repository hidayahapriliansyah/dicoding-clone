export type Testimony = {
  image: string;
  imgPlaceholder: string;
  description: string;
  name: string;
  profession: string;
  company: string;
  completedClass: string;
  link: string;
};

const testimonies: Testimony[] = [
  {
    image: 'homepage-testimony-brian.jpg',
    imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAACfElEQVR4AQBBAL7/AKl5//+ld///onr//6WE+P+qke7/qpjf/5+Tyf+NhLH/gHek/4B1qv+NfML/nYXh/6iH+/+ogP//o3X//51t//8AQQC+/wCodP//pHP//6J3/f+lgfL/qo7o/6qW2f+gkcP/j4Os/4J2n/+BcqT/i3a5/5h91f+hfu7/onj+/55u//+aZv//AEEAvv8AqXH//6Vx//+jdPb/p3/r/6yN4f+tldP/pJK//5WFqf+IeZz/hXKe/4tzsP+Vdcj/m3Te/51v7v+baPj/mWP8/wBBAL7/AK10//+qc///qHf0/6qB6P+wj93/sZjQ/6qXvf+ejar/koKf/456n/+Qd6z/lXXA/5py1f+eb+f/oGv0/6Fq+/8AQQC+/wCvef//q3n//6h79P+phOb/rZDa/6+ZzP+qmrz/oZWs/5iMo/+ThKT/k36t/5R5vf+YddH/n3Tl/6Z2+P+reP//AEEAvv8Apnr//6J4//+cee//mn7d/5uHzv+bj7//mZKx/5SRpf+OjJ//ioWg/4h9qP+Hdrb/i3LJ/5V14f+ifPj/q4L//wBBAL7/AI9w//+JbfP/gGrf/3pryf92b7X/dXal/3N6l/9xfI7/b3qM/211jv9pbJX/aGSh/2xgtf95ZtD/i3Pt/5h9//8AQQC+/wBxXu//aVng/11Tyf9SUK//S1GX/0dUhP9GWXb/Rl1v/0deb/9FWnP/QlF6/z9Ihf9ERZn/VE62/2le1/95a+z/AUEAvv8AXFDi/1NK0v9FQrn/Nzyc/y07gf8oPWz/JkFf/yhGWf8qSVr/KUZf/yU9Zf8iM3D/KDGE/zk7o/9QTcX/YVvc/7HvioMFy9TDAAAAAElFTkSuQmCC',
    description: 'Disajikan dengan struktur pembelajaran yang rapi, ilmu-ilmu teknis seperti Kotlin di Dicoding sangat mudah saya pahami dan terapkan sampai sekarang. Dicoding memastikan semua lulusannya punya dasar yang kuat di bidang Android dan bidang lainnya.',
    name: 'Brian Mohammed Catraguna',
    profession: 'Software Engineer',
    company: 'Meta',
    completedClass: 'Android Path',
    link: 'https://www.dicoding.com/blog/lulusan-teknik-dirgantara-yang-kini-berkarier-di-meta/',
  },
  {
    image: 'homepage-testimony-archie.jpg',
    imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAACfElEQVR4AQBBAL7/ADOl//80nv//PZr//1Se9P9wpub/gqfS/4Wbt/+Aj6L/fo2h/4KYtP+BpdH/cqno/1mj+P9AnP//Mpz//y2f//8AQQC+/wAxoP//Mpr//z2X//9VnPP/caXl/4Sl0f+Gmbb/gIug/32Inf9/kq//fZ7K/26h4f9Vm/H/PZb//zCX//8smv//AEEAvv8AL5n//zKU//8/k///WZvy/3ak5v+IpNH/ipe1/4KInf9+g5j/f4up/3uWwv9rl9f/UpHn/zyN9/8xkP//Lpb//wBBAL7/ADGV//82kv//RZP//2Gc9P9/p+j/kqfT/5Oat/+Mip7/iIWZ/4eMqP+ClL//cJTS/1aO4f9BivL/N4///zaW//8AQQC+/wA3lf//PZP//0+X//9sovb/jK3r/5+u1/+iorv/nZWk/5qRoP+amK7/k57E/3+c1P9jk+H/TY/w/0SU//9Em///AEEAvv8AP5n//0aY//9Znf7/d6n2/5i16/+tt9n/s66//7Gkq/+xo6r/squ5/6uxzf+Tq9v/dJ/j/1yY8P9Rm///UaL//wBBAL7/AEae//9Nnf//YKL7/3+v8v+hu+j/t7/X/8C5wP/Ds7H/x7az/8vAxP/Cxdf/qLzh/4Sr5f9ooO7/W6H9/1mn//8AQQC+/wBKof//UaH//2Sl9v+Dse3/pL7j/73D0v/IwL7/z72z/9fEuP/d0Mv/1NTd/7fI5P+PtOT/b6Xp/1+j9v9cp///AUEAvv8ATKP//1Oi/f9lp/L/hLLo/6W/3v++xM//zMO8/9TDsv/fzLr/5tnO/93d4P++z+X/lLjj/3Gm5f9govD/XKb7/4vSq2h8nI3EAAAAAElFTkSuQmCC',
    description: 'Dicoding menawarkan biaya pelatihan yang terjangkau untuk pengalaman belajar pemrograman yang mendalam. Pengetahuan dari program ini memperkuat ilmu fundamental saya dan berkontribusi pada portofolio profesional yang tengah saya bangun.',
    name: 'Made Acarya Mordekhai Karang',
    profession: 'Engineer On Site',
    company: 'PT Integrasi Data Nusantara',
    completedClass: 'Front-End Web & Back-End Path',
    link: 'https://www.dicoding.com/blog/merajut-asa-untuk-menjadi-developer-andal-lewat-dicoding-bootcamp/',
  },
  {
    image: 'homepage-testimony-karlina.jpg',
    imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAACfElEQVR4AQBBAL7/AP9Saf//YXb//2+C//1ygf/XbHf/t2lw/6Vucv+dcnX/mGxv/5hhZf+sXmX/1Gp0//93hv//doj//2J3//9PZv8AQQC+/wD/U2n//2J2//9xg///dIP/2m95/7ptc/+ocXT/nnN1/5Zsbf+UXmH/pVlf/81jbf/7cn///3OE//9idv//UWb/AEEAvv8A/1Rq//9jd///coT//3eF/9tyfP+8cHb/qXV3/552dv+Ta2v/jVlb/5pRVf/AWmH/8Gp1//9vfv//Y3X//1Vo/wBBAL7/AP9Tav//Ynf//3KE//t2hP/Xcnz/uHF3/6Z2eP+adnf/jGlp/4JUVf+MSEv/sFBW/+JibP//bHn//2d2//9dbf8AQQC+/wD/UWr//152//9sgf/ub4D/yWt3/6tqcv+ZcXT/jnJ0/4BlZf90Tk//e0BD/55GTP/RW2T//Gp2//9qef//ZHT/AEEAvv8A/0xq//9YdP/2Ynv/12J2/7Bbav+RW2X/gmNq/3lna/9sXF//X0VI/2U1Ov+HO0L/u1Fb/+pjcP//aHf//2V2/wBBAL7/APRHaf/wUHD/31Vy/7tQaP+QRln/cUVT/2NPWv9dV17/U05U/0c4Pv9MKC//bC03/6FDT//RV2f/7l9w//lecP8AQQC+/wDnQmn/4Eht/8pJav+hPlv/czFI/1IvQf9FO0n/QkVQ/zo/SP8wKzT/NBsl/1QfK/+HNEP/uElb/9dSZv/iUmf/AUEAvv8A3z9o/9ZDa/+9QWX/kTRT/2EkPv8/ITb/My4+/zE6R/8rNkH/ISIt/yUSHv9EFST/dyo7/6g/U//HSF7/00lf/9m9X2nt10pYAAAAAElFTkSuQmCC',
    description: 'Dulu, saya sempat tidak percaya diri dengan kemampuan saya. Namun, skills yang saya peroleh dari Dicoding membuat saya berani untuk melamar ke salah satu bank swasta ternama di Indonesia. Akhirnya, saya berhasil diterima sebagai IT Security Specialist di Bank BCA.',
    name: 'Karlina Surya Witanto',
    profession: 'IT Security Specialist',
    company: 'Bank BCA',
    completedClass: 'Machine Learning & Front-End Web Path',
    link: 'https://www.dicoding.com/blog/belajar-membangun-integritas-di-sib-dicoding-cycle-1/',
  },
  {
    image: 'homepage-testimony-steven.jpg',
    imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAACfElEQVR4AQBBAL7/AP/tcP//73v//+2I//fgj//bx43/vKyI/6aYh/+cko3/n5eY/6qjov+6tKr/zMaw/93Wsf/q47D/8uqs//XtqP8AQQC+/wD/6Wj//+xz///rgf/43on/3seJ/8Guhf+sm4X/opWL/6SYk/+topz/urGi/8vBpf/b0ab/592j/+/kn//y55z/AEEAvv8A/+dg///qa///6Xr//d+D/+bKhf/MtIT/uaOF/6+civ+vnpH/tKWV/7+wmP/Nvpj/3MyY/+nYlf/x35H/9OKO/wBBAL7/AP/pXv//62n//+t3///hgf/wz4X/2byH/8itiv+/po//vaaT/8CqlP/Is5T/1b+S/+XOkf/y24//++OM///nif8AQQC+/wD/7GP//+1s///qeP//34H/88+G/9+9if/QsY7/yKqT/8Wplf/HrJT/zrOS/9zAkf/t0ZH//eCS///rkP//8I//AEEAvv8A/+Zn///lbf//3nb/+tF7/+W/fv/RrYH/w6KG/7uci/+5m43/u52L/8Omiv/UtYr/6MmO//3ckv//6pP///GU/wBBAL7/AP/UY//80Gb/78Rp/9uyav/DnGn/rYpq/59+bv+YeHL/lXd0/5l6c/+jhXP/t5h2/9Cwfv/pyIb/+9mL///ijf8AQQC+/wDovFj/37RY/82kVv+0jVH/mHNN/4BeS/9xUU3/aktR/2hKU/9sTlL/eVtU/5BxWv+tjWX/yqhx/9+9ef/qx3z/AUEAvv8A1KpO/8qgTP+1jUf/mXNA/3pXOP9hQDX/UTI2/0ksOf9IKzr/TDA6/1s9Pf90VUX/k3RS/7KRYP/Jp2n/1bJu/xMFrCZh2SKJAAAAAElFTkSuQmCC',
    description: 'Menurut saya, teknologi AI yang banyak diandalkan di masa depan membuat seorang developer harus beradaptasi dengan kondisi ini. Oleh karenanya, Dicoding mempersiapkan kelas "Belajar Dasar AI" untuk memastikan saya, sebagai talenta teknologi, siap untuk melangkah maju.',
    name: 'Steven Setiawan',
    profession: 'Full-Stack Engineer',
    company: 'PT Innovine Studio Indonesia',
    completedClass: 'Machine Learning Path',
    link: 'https://www.dicoding.com/blog/karier-berkembang-pasca-belajar-di-dicoding/',
  },
  {
    image: 'homepage-testimony-ricky.jpg',
    imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAACfElEQVR4AQBBAL7/ABP28P8h9e//Nu7o/0nd1/9YxL7/ZKyl/2qWkP9nhH7/W3hx/056c/9Kkoz/ULy2/1Pm4P9E/Pb/KPz1/xDz7f8AQQC+/wAQ9Ov/H/Pq/zTs5P9J3NT/WcW9/2eupv9vmpH/a4d//115cP9Md2//RYyD/0mzq/9L3dT/PvXs/yT37v8P8Oj/AEEAvv8AEfLn/x/y5v817OD/S93R/1/Jvf9wtan/eqOX/3eQhf9mfnP/UHdr/0KFef9BqJ3/Q9HG/zrs4f8m9Oj/FPHl/wBBAL7/ABj16P8m9Ob/O+3f/1Lf0f9ozb//fb2v/4uuof+KnZD/d4l7/1t7bv9GgnT/QaGT/0PJvP8/6dv/Mffp/yT46/8AQQC+/wAj+Oz/LvXo/0Hr3v9W2s7/bcm8/4a9sP+Zs6b/nKWY/4iQg/9ofnH/Tn5y/0WYjP9HwbX/SObZ/0H67f84//T/AEEAvv8AKPPq/zDs4/893NP/Tse+/2S0rP9/qqH/mKWc/5+bkv+Nh3//a3Nq/01vZv9Ahn3/Q6+m/0nYz/9I8un/RP30/wBBAL7/ACLh3v8m1dL/LL68/zajoP9JjYr/ZYOA/4KCf/+OfHn/fmto/1xWU/88T0z/LWNg/zCMif85uLX/PdfU/z3m4/8AQQC+/wATx8r/E7e7/xKanv8WeHv/JV5h/0FUV/9hVVj/cFNW/2RER/9CLzL/IScq/xA5PP8UYmX/HpCT/yWytf8nw8b/AUEAvv8ABrW7/wSiqf8AgYj/AFti/ww+Rf8oMzr/SDY9/1o2Pf9PKC//LhQb/wwLEv8AHCP/AEVM/wlzev8Sl57/Famv/+LYcBK1zLvjAAAAAElFTkSuQmCC',
    description: 'Belajar di Dicoding tidak hanya bermanfaat bagi mereka yang masih pemula dalam hal wawasan teknologi, tetapi juga membantu profesional yang sudah berpengalaman kerja seperti saya untuk dapat memperbaharui keterampilan.',
    name: 'Ricky Tanudjaja',
    profession: 'Software Developer',
    company: 'Samsung Research Indonesia',
    completedClass: 'Back-End & DevOps Engineer Path',
    link: 'https://www.dicoding.com/blog/berusaha-jadi-talenta-digital-yang-terus-belajar/',
  }
];

export default testimonies;