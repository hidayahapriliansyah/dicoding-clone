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
      image: 'belajar_dasar_pemrograman_web_logo_230421141544.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/AMDHzv+5wsn/sL3F/6m6w/+kusT/nrnE/5u6x/+hws//sNPf/7/h7v/C4+7/tdPd/6G8xP+UrbT/lauw/5qus/8AQQC+/wDEys//vsXL/7bAx/+vvsf/qr3H/6O8x/+fvMj/o8PP/7DR3f+93un/vdzm/63J0v+Wr7b/hpyi/4OXnP+HmZ7/AEEAvv8AxcfL/8DDyP+5wMX/tL/G/66/x/+ovcb/o7zG/6XBy/+vzdf/udbg/7bS2/+iu8L/hpyi/3KFif9rfH//bHt+/wBBAL7/ALu4uf+3tbj/srS4/7C2u/+suL7/p7e+/6K2vv+jusP/rcXO/7bO1v+yydD/nLC2/32Pkv9ldHb/W2do/1plZf8AQQC+/wCooJ//pqCg/6Wio/+mp6n/pqyv/6Ktsv+erbP/obO5/6y/xf+4ytD/tsfM/6Kxs/+EkJH/a3R0/2BnZv9eY2L/AEEAvv8AmYuI/5mNi/+bk5H/oJyc/6Okpf+hp6r/n6is/6Ovs/+xvsL/wM3R/8PP0f+zvb3/maCf/4OHhP95enf/d3h0/wBBAL7/AJaEf/+Yh4P/nZCM/6Wcmv+qpqX/qaqr/6esrv+rs7X/usPF/8vU1v/S2tr/yM3M/7O1sv+hoJz/mZaR/5mVj/8AQQC+/wCeiIL/oYyH/6iXk/+ypaL/uLCv/7e0tP+ytLT/tLi5/8HHyP/T2Nn/3ODf/9XX1f/Ew7//tbGs/7CqpP+xqqP/AEEAvv8Apo6I/6qUjv+zoJv/vq+s/8S7uf/Cvbz/u7q6/7i7u//Cxcb/0dXU/9nc2v/U09H/xcK9/7izrf+2raf/uK6n/wBBAL7/AKiPif+tlpD/t6Oe/8KzsP/Jv73/xcDA/7y6u/+2uLj/u76//8fKy//O0M//yMfF/7q2sv+vqaT/raWf/7CnoP8AQQC+/wCji4X/qJKN/7Kfm/++sK7/xry7/8K9vv+3trj/r7Kz/7K2uP+7wMH/wcTE/7q7uv+tq6j/pJ+b/6Scl/+nn5n/AEEAvv8AnYeD/6KNiv+rmpj/t6uq/763t/+6uLr/r7Gz/6arrv+or7L/sbi6/7e8vf+xtLT/paWk/56bmP+fmpb/pJ2Z/wBBAL7/AJ2Jh/+gjo3/qJmZ/7GoqP+2srP/sbG1/6Wprv+cpKj/nqes/6ewtP+ttbj/qa6w/5+hov+ZmZj/nZqY/6KenP8AQQC+/wCjkpH/pJWU/6icnf+upqj/r6yw/6eprv+ZoKX/jpif/5Cbof+ZpKr/n6mu/5ykqP+UmZv/kJOT/5WVlf+bmpn/AEEAvv8Aq5yc/6qdnf+qoKL/q6ap/6inrP+coaf/i5Sb/3+Lkv9/jJT/iJWc/46aoP+Mlpr/hIuP/4KGiP+Iiov/j5CQ/wFBAL7/ALCio/+uoqP/rKOl/6qlqf+jpKn/lZuh/4KMk/90gYn/c4KK/3uKkf+Bj5X/f4qQ/3iBhf93fH//fYCB/4SGh/9an/uhNlz5WQAAAABJRU5ErkJggg==',
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
      image: 'belajar_dasar_pemrograman_javascript_logo_230421133231.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/AKCGcP+cgm3/l31o/5R6Zv+Uemj/lnxr/5J5av+Hb2L/eWJX/3JdU/94ZV3/hnVv/41+ev+Cc3H/aFtZ/1NGRP8AQQC+/wCTemb/kHdi/4tyXv+Ib13/iXBf/4tzY/+JcWP/f2hc/3FbUv9qVk7/b11X/3xsaP+CdHH/dmlo/1xQT/9GOzv/AEEAvv8AiHFf/4VuXP+Baln/f2hY/4FqW/+EbmH/g21i/3pmXf9tWlP/ZlRP/2paWP92aGf/em1u/2xhY/9RR0r/OzI1/wBBAL7/AI14af+KdWf/h3Jk/4ZxZf+JdGn/jXlw/416c/+GdG7/emlm/3JjYv90aGn/fXN2/392e/9waW//VU5V/z85QP8AQQC+/wCgjoP/noyB/5yKgP+cioH/n42G/6OSjf+klJD/nY+N/5KEhf+JfoH/ioCG/5CJkf+Ri5T/gX2I/2Vjbv9QTlr/AEEAvv8As6Ob/7Kimv+woZr/sKGb/7Kkn/+2qKb/t6qq/7Ckp/+kmp//mpKa/5mTnf+emqb/nZup/42Nnf9zdIX/X2Bx/wBBAL7/ALSmoP+zpaD/sqWg/7Klof+zp6X/tqqq/7Wqrf+upKr/oZmi/5eRnP+UkZ//mJen/5eYqv+Ii57/cHSI/11hd/8AQQC+/wCgk4//oJOP/6CTkP+fk5H/n5SU/6CVmP+elJn/lo6W/4mDjv9+e4j/fHqK/39/kv9+gZb/cXaN/1xhev9KUWr/AEEAvv8AhHdz/4V4dP+FeHX/hHh2/4N3eP+Cd3v/f3Z8/3dwef9sZnL/Yl5u/19fcf9jZHn/Y2d+/1led/9FTGf/Nj5Z/wBBAL7/AHFiXf9yY17/cmRg/3FjYf9vYmL/bWFk/2pgZf9kW2T/WlRg/1NPXv9SUGP/Vldt/1hbc/9PVG7/PkRf/zA3U/8AQQC+/wBtXFT/bl5X/29eWf9tXVn/aVpZ/2dZWv9kWFz/YVZe/1tTXv9WUV//WFVn/11dcv9fYnn/V1x1/0dNaP86QVz/AEEAvv8AdWJX/3ZjWf92Y1r/cmBZ/21cV/9qWVj/aFpb/2dbYP9lW2T/ZV1q/2lkdP9vbYD/cXGH/2hrgv9YXHX/S1Bq/wBBAL7/AIBpW/+Aalz/fmhc/3hjWf9wXFT/a1hU/2pZWP9sXV//bmFn/3BmcP92b3z/fHiI/3x7jv9yc4n/YWN6/1NWbv8AQQC+/wCGbFv/hWxc/4FoWf94X1P/bVZM/2ZQSf9lUU3/aFZW/2xdYf9xZW3/eG56/312hf97d4n/b22B/1xbcf9NTWT/AEEAvv8Ah2tY/4VpV/9+Y1L/c1hJ/2VMP/9cRDv/WkQ+/15KSP9kU1X/alxi/3Fmb/91bXr/cWx8/2Nfcf9NS1//PjxR/wFBAL7/AIZpVP+DZlP/e19N/25SQv9eRDf/VDsx/1I7NP9WQT7/XEpL/2NUWf9qXmb/bWRw/2hicf9YVGX/Qj9S/zEvQ/+7sVGuB1YpwQAAAABJRU5ErkJggg==',
      level: 'Dasar',
      rating: 4.86,
      summary: 'Pelajari dasar JavaScript, dari fundamental, sintaks dan fitur ES6, hingga konsep automation test menggunakan framework populer.',
    },
    {
      step: 3,
      link: 'https://www.dicoding.com/academies/315-belajar-membuat-front-end-web-untuk-pemula',
      title: 'Belajar Membuat Front-End Web untuk Pemula',
      hours: 45,
      image: 'belajar_front_end_web_pemula_logo_270421095055.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/AIuNfv+RkoT/l5iJ/5qai/+amYr/m5qL/52cjv+cnJD/k5WL/4KFf/9udXL/YWtr/11qbf9ebnT/YHF6/2Fzff8AQQC+/wCKjH7/kJGD/5aXiP+ZmYr/mZiJ/5qYiv+cm47/nJyQ/5KUiv+BhH7/bXRx/2Fqav9caW3/Xm1z/19wef9gcnz/AEEAvv8AiIl8/42Ogf+Tk4X/lZWH/5WUhv+WlYf/mZiL/5iYjf+PkIf/fYF6/2pwbf9dZmf/WWVp/1lob/9bbHX/W213/wBBAL7/AISFef+Jin3/jo6B/4+Pgf+PjoD/kY+C/5SShv+Tk4j/iouD/3h7dv9kamj/V2Bi/1NfZP9TYmn/VGVu/1Rmcf8AQQC+/wCBgnf/hYZ7/4mJff+Kin3/iol9/4yLf/+Qj4T/kJCH/4eIgf91eXX/Ymhn/1VfYf9RXWP/UWBo/1Fibf9RY27/AEEAvv8AgIJ5/4OFe/+Gh33/h4d9/4eHfP+LioD/kZCH/5OTi/+LjYf/e398/2lwcf9eaGz/Wmdu/1ppc/9Za3f/WGt4/wBBAL7/AH+Bev+Bg3z/g4R9/4OEfP+FhX3/i4qC/5OTjP+YmZP/k5aT/4aLiv93f4L/bnl//2x6g/9sfYj/a36M/2p9jP8AQQC+/wB4fHj/eX14/3p9eP97fXj/fX95/4WGgf+Rko7/mZuY/5icm/+OlZb/g4yR/32Kkv99jJj/fpCe/3yRof97kKH/AEEAvv8AbnRz/290c/9uc3L/bnJw/3F0cv96fXv/iIuK/5KWlv+Umpz/jZWa/4WQmP+CkJv/g5Wj/4SZqf+Dmaz/gJer/wBBAL7/AGpydf9qcXT/aG9x/2Zsbv9obm//cXd4/3+Fhv+KkJT/jJSZ/4aRmf+Ajpj/fo+d/4CUpf+Al6v/fZar/3mTqv8AQQC+/wBzfoX/cnyC/254fv9rdHn/a3R5/3N7gP9/iI3/iJKY/4mUnf+CkJv/fIya/3mNnv96kaX/eJKp/3OPp/9ui6T/AEEAvv8AhJGb/4KPmP99ipP/eYSN/3iDjP9+iZL/iJSd/4+cpv+OnKj/hZak/32Qof95j6T/d5Go/3OQqv9riqb/ZYSh/wBBAL7/AIqap/+Il6X/hJOf/4COmv9/jZn/hpOf/4+dqf+VpLH/kaKx/4ebrP9+lKj/eJKp/3WSrP9vjqv/ZYal/11/n/8AQQC+/wB4i5v/d4mZ/3SGlf9yg5L/dIST/3yMmv+Hl6b/jZ+u/4qdrv+Alqn/do+l/3CMpv9si6j/ZYem/1l9nv9QdZf/AEEAvv8AVWl7/1Vpev9UZ3j/VWd4/1prfP9ldob/coSU/3qNnv94jaD/b4ac/2aAmf9hf5r/XX6c/1V5mf9Jb5H/QGaK/wFBAL7/ADlOYf85TmH/Ok5g/zxPYf9DVmf/UGN0/19yg/9pfY//aH6S/2B5j/9YdI3/VHOP/1Bykf9JbY//PGOG/zNaf//qKYI4H85AlAAAAABJRU5ErkJggg==',
      level: 'Pemula',
      rating: 4.87,
      summary: 'Pelajari materi mengenai DOM manipulation, Event, dan Web Storage untuk meningkatkan fungsionalitas dan interaktifitas pada website Anda.',
      totalStudent: '100.8k'
    },
    {
      step: 4,
      link: 'https://www.dicoding.com/academies/163-belajar-fundamental-front-end-web-development',
      hours: 80,
      image: 'belajar_fundamental_front_end_web_development_logo_230421131631.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/AIR9kf9pYnb/U01g/2Jdbv+UkKD/x8PS/9TQ3f+1sLr/hH2E/2RaXv9nWlv/hHJx/6KMif+ymZT/s5iR/6+SjP8AQQC+/wCPiJz/c22B/1xWaf9pZXf/mpan/8zJ1//Z1uL/urbA/4mCiv9pX2T/a11f/4Rzcv+fiof/rJOO/6qPif+liYL/AEEAvv8Am5Wq/355jf9lYHT/b2t+/52aq//Mytr/2dfk/7u3wv+LhY3/a2Jo/2tfYf+BcHD/loKA/56Hgv+Yf3n/kXZw/wBBAL7/AKCcsv+CfpP/ZWF2/2pofP+UkqX/wL/P/8vK2P+urLj/gHyF/2JaYP9hVln/dGVm/4Zzcv+JdHD/gWlk/3heWf8AQQC+/wCenLP/fnuS/1xbcf9cXHH/f4CT/6eouf+wscD/lJOg/2hlb/9MRk3/TENH/19SU/9wX17/cl5b/2lSTv9fSEP/AEEAvv8Anpy1/3p6kv9VVWz/T1Bm/2ttgv+Mj6L/k5Wl/3Z3hP9MS1b/Mi42/zQtMv9IPD//WUpK/11LSf9WQT3/TTcz/wBBAL7/AKWmwP+Bgpv/WFly/0xPZ/9iZnz/foKW/4CElv9hZHP/ODhF/x4cJf8hHCL/Niww/0k7PP9PPj7/Szc1/0QwLf8AQQC+/wC2t9P/kZOu/2ZphP9YXHX/am+H/4KHnf+Bhpn/YGV1/zU3Rf8bGiT/HBgf/y8nK/9CNjj/Sjs7/0g3Nf9EMS//AEEAvv8Axcjl/6Gkwf94fJj/a3CL/32DnP+UmrH/kpmt/3F3iP9FSFf/KCk0/yUiK/80LjP/RTs+/05AQf9OPj3/Szo5/wBBAL7/AMvO7f+orMv/g4el/3h+m/+Ola//qLDI/6qxx/+MkqX/YGV0/0FDT/87OUL/RT9G/1NJTf9aTU//W0xM/1lJSf8AQQC+/wDCxeb/oabG/3+Eo/96gJ3/lJu3/7S81v+8xNv/pKq+/3yBkf9dX23/VFNd/1tWXf9lXWH/bGBi/21fYP9tXV3/AEEAvv8Ar7LU/4+Utf9vdJT/bHOR/4qSr/+wuNP/v8ff/620yf+LkaL/cHOB/2dmcv9taHD/dm5z/3xxdP9/cXP/gHBx/wBBAL7/AJmdv/95fqD/V11+/1Raev9yepf/mqK+/662zv+jqr//h4yf/3Fzgv9ranb/cW11/3tzef+DeHz/iHp8/4p7fP8AQQC+/wCHi67/ZWmM/z9EZv82PV3/UVh3/3iAnP+Nla7/ho2j/291iP9eYHD/XFtn/2Vgav9yaXD/fHF1/4N1eP+HeHr/AEEAvv8Ae3+i/1Zaff8rMFL/HCJD/zE4V/9UXHn/aHCK/2Nqgf9QVWn/QkVV/0NCT/9PS1T/X1Zd/2xgZf92aGv/e2tu/wFBAL7/AHV5nf9OUnb/ICVH/w0TNP8eJUT/PkZi/1FZcv9MU2n/Oj9T/y4wQf8xMD3/PzpE/1BHTv9fU1j/alxf/3BhY/+WLl3Fn8WLlAAAAABJRU5ErkJggg==',
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
      image: 'dos_belajar_tools_front_end_web_intermediate_logo_070223112714.png',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/ANjUsP/OyqX/ysWe/9TNpP/n3rL/8+i7//Xnuf/05bf//Oq+///yyP//7sf/7tm3/93Hqf/kzrT//+3X////9v8AQQC+/wDa2LT/z8yo/8nEnv/Ry6P/5Nux//Lnu//26bz/+Oq9///xxf//+dD///PO//Dcu//cx6v/4cyz///q1P////P/AEEAvv8A2ti3/8zKp//AvZn/xcCa/9jRqP/p4LX/8ue7//nswf//983////X///20v/s27z/1MKn/9bErf/y4Mz///zp/wBBAL7/AM/PsP+9vZ3/rKqI/62phf++uZP/08yk/+Pasf/w5r3///TM///81//+8M//39G0/8K0m//Asp3/2sy6//Xn1v8AQQC+/wC7vKD/paWJ/42Nbv+JiGf/m5d0/7Sviv/Kw53/3taw//How//68M7/7eLE/8rApf+qn4r/ppuJ/760pf/Zz8H/AEEAvv8AoqOL/4iJcP9rbFH/ZGNG/3Z0Vf+UkG//sKuJ/8nDof/g2bj/6eLE/9vTuP+2r5j/lY57/5CJev+oopb/w7yy/wBBAL7/AIqLd/9ublr/T084/0dGLf9aWD3/fHlc/56ae/+7tpj/086x/97Yvv/PybP/qqWS/4mEdv+EgHb/nZqS/7i1rv8AQQC+/wB4eGn/XFtL/z08Kv83NCD/Tko0/3NvVv+Xk3n/trGY/87Ksf/Y077/ycWy/6Whk/+Fgnj/gX95/5uZlf+2tLL/AEEAvv8Acm9k/1hTSP87Nyr/ODMk/1JNO/95c1//npeC/7q0n//Qyrb/19LA/8fDtf+joJb/hIF7/4B+ff+ZmJn/s7O1/wBBAL7/AHpybP9iWVP/SkE5/0tCN/9nXlH/joR1/66klP/FvKv/1My9/9jRxP/GwLf/op6Y/4J/ff99e33/lJOY/62ss/8AQQC+/wCMfn3/dmln/2NVUf9oWlT/hXdu/6iakP/BtKj/z8O2/9fMwf/XzMT/xLu2/6CZmP+Aen3/eXV7/42Kk/+koaz/AEEAvv8AmYaJ/4d0dv94ZWX/gG1q/5yJhP+6p6D/yriw/8++tv/Qwbn/zb+6/7uvrf+Zj5L/enF4/3Jrdf+DfYr/l5Kg/wBBAL7/AJF4fv+BaG7/dl1g/4BnaP+bgoH/s5uY/7ukn/+4op3/taGd/7Ggnv+jlJb/h3p//2tfaf9jWWf/c2p6/4Z+j/8AQQC+/wBrTVb/XUBI/1U3Pv9gQ0f/el1e/41xcP+PdHL/h25s/4Nrav+Dbm//fGlu/2dXX/9RQk//TD9P/1tQYv9tYnf/AEEAvv8ANhQf/yoIEv8jAgr/MA8V/0goK/9ZOTr/Vzk5/00wMP9KLzD/Tzc6/085QP9CLzn/MiEv/zAhMv9AMkf/UkVb/wFBAL7/AA8AAP8EAAD/AAAA/wsAAP8jAQb/MhEU/y8QEP8kBwf/IwcI/ysSFv8wGSH/KBQf/xwKGf8cDB//LR40/z8xSP8S1rLOKsqbqAAAAABJRU5ErkJggg==',
      level: 'Mahir',
      rating: 4.85,
      totalStudent: '1.8k',
      summary: 'Pelajari tools berstandar industri dengan Sass, Bootstrap, Lit, Axios, dan Firebase dalam membangun aplikasi web yang efisien dan powerful.'
    },
    {
      step: 6,
      link: 'https://www.dicoding.com/academies/219-menjadi-front-end-web-developer-expert',
      hours: 110,
      image: 'menjadi_front_end_web_developer_expert_logo_230421131923.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/AKy+0v+ktsj/pbTF/7XD0f/I09//yNHZ/7G3vf+Xmp//kJGV/5ybnv+hnqL/jIiL/2FcYf86NDr/JyEo/yQeJv8AQQC+/wC0xtn/rL3Q/6y7zP+7yNb/zNfj/8vU3f+0usD/mp2h/5SVmP+hoKP/qKWp/5SQlf9rZ2z/RUBH/zQuNv8xKzP/AEEAvv8Avs/j/7bG2P+0wtP/wc3c/9Db5//O1t//trvC/5yeo/+XmJv/pqWo/7Cusf+gnKH/eXV7/1VRWP9FQEj/Qj1G/wBBAL7/AMTT5/+6ydz/t8TV/8LN3P/Q2uX/zdTd/7S4v/+anaL/l5ic/6morP+2tLj/qKWr/4SBiP9iXmb/UU1W/09LVf8AQQC+/wDD0eT/ucbZ/7TA0f+/ydj/zNXh/8nP2f+xtbz/mJug/5eYnf+rq6//u7q//7CttP+NipL/amdw/1lWYP9WU17/AEEAvv8Aws7h/7fD1f+yvM3/vMXT/8rS3f/Iztf/sra9/5yepP+dnqP/tLS5/8bFy/+7usH/mJaf/3Ryff9hX2v/XVtn/wBBAL7/AMPN4P+4wtP/s7zL/73F0//N097/zdHa/7m8xP+mqK7/qqux/8PEyv/X197/zc3V/6mps/+EhI//b298/2lqd/8AQQC+/wDHz+H/u8PU/7W8y/+/xdL/0NTf/9LV3v/Bw8r/sLK4/7e4vv/T1Nr/6Onx/+Dh6v+8vcj/lZek/3+Bj/95e4r/AEEAvv8Ax87e/7rA0P+yuMb/vMDN/8zQ2v/P0dr/v8HI/7Gyuf+6u8H/19nf/+7w+P/n6vT/xcjT/56isP+IjJv/goaW/wBBAL7/AMDF1P+ytsX/qKy5/6+yvv++wMr/wMLK/7Gyuf+ipKr/q62z/8nM0//i5e3/3eDr/7zBzf+Xnav/goiY/3yDk/8AQQC+/wCytcP/oqWz/5aZpf+bnaj/qaqz/6qrs/+Zm6H/ioyR/5GUmv+usbj/xsrT/8LH0v+jqbb/gIiX/211hv9ocYL/AEEAvv8AoKGv/4+Rnv+ChI//h4iS/5SVnv+Vl53/hIWL/3J0ev93en//kZWc/6estf+iqLP/g4uZ/2Nse/9RW2z/TVhq/wBBAL7/AI6Pm/9+f4r/cnN9/3h5gv+HiI//iouR/3h6f/9lZ2z/Zmlv/3yBiP+PlZ7/h4+a/2hyf/9IU2P/OERV/zVBU/8AQQC+/wB+for/cHB7/2ZmcP9wcHj/g4OK/4iJjv94en7/ZGZr/2Jma/90eoD/g4qT/3iBjP9YY3D/N0RT/yc0Rv8kMkT/AEEAvv8AcnJ9/2Vlb/9fXmf/bGxz/4ODiv+MjZL/f4CE/2ptcf9na3D/dXuC/4CIkf9zfYj/UV1q/y89TP8fLT//HCs9/wFBAL7/AGtrdf9fX2n/W1pj/2tqcv+FhYv/kZGW/4SFiv9wc3f/bHB1/3l/hf+CipL/c32I/09baf8tO0r/HCs8/xkpO/+9bssWQI/meQAAAABJRU5ErkJggg==',
      level: 'Profesional',
      rating: 4.89,
      summary: 'Pelajari teknik-teknik expert serta modern dalam membangun website yang optimal pada seluruh perangkat, terutama pada perangkat mobile.',
      title: 'Menjadi Front-End Web Developer Expert',
      totalStudent: '8.8k'
    }
  ]
}