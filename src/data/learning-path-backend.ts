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
      image: 'cloud_practitioner_essentials_belajar_dasar_aws_cloud_logo_230421133823.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/AP/++f//+PP/9url/+LU0P/Rwr7/0MC8/+DOy//z4d3/++nl//Tj3v/p2dP/4tPM/+HTy//f0sn/2MzC/9HGu/8AQQC+/wD47+r/8unk/+TZ1f/Pw7//vrGu/76vrP/Ovrz/4tLQ/+3c2f/p2dX/39DL/9rNxv/azsb/2c3E/9LHvf/Lwbb/AEEAvv8A4dvY/9rU0f/Kw8D/tKup/6KYl/+il5X/s6em/8q9u//Xysf/1snG/9DEv//Nwr3/zsW+/83FvP/Gv7b/v7iu/wBBAL7/ANLRz//KyMf/uLa1/6CcnP+NiIj/i4WF/52Vlf+0q6v/wrq5/8S7uv/AuLX/v7i0/8K8tv/BvLX/ubWu/7Kupv8AQQC+/wDS19j/ys7P/7e6u/+dnqD/iIiK/4SDhf+UkZT/qqao/7i0tf+6trb/t7Oy/7e0sv+6uLT/uLiy/7Cwqv+oqKL/AEEAvv8A3uns/9bg4//Cy8//qK+0/5KYnP+NkZX/mpyh/66vs/+6ur3/uru9/7e4uP+3ubj/ury6/7i7t/+vs67/pqql/wBBAL7/AOf3/f/g7/X/ztzi/7bCyf+hq7L/m6Sr/6eutP+4vcP/wcbL/8DEyP+8wcP/vcLC/8DFxP+9w8H/srm2/6mwrP8AQQC+/wDh9f3/2+/3/87g6P+5ytL/p7a+/6OwuP+uucH/vcbO/8XN0//Dys//v8fK/8DIyv/Dy8v/wMjH/7S+u/+qs7D/AEEAvv8AyuLr/8fe6P++1N3/r8LM/6GyvP+frrj/qrfA/7nEzP/AydH/vsfM/7vEx/+9xsj/wMnJ/7vFxP+uuLb/oq2q/wBBAL7/ALDJ1P+vyNL/qsHL/56zvv+TprD/k6Ot/56stv+suMH/s73E/7K7wf+wub3/s7y+/7a/v/+vubf/oKmn/5Kcmf8AQQC+/wCgusX/obrF/5yzv/+RprL/hpmk/4WVoP+Pnaf/nKix/6Sttf+krbP/pa2x/6mxs/+rsrP/oqqo/4+XlP9/h4P/AEEAvv8AobrF/6C4xP+asbz/jKGs/36Qm/95iJP/gY2X/42XoP+WnqX/mqCm/56kp/+kqqv/pauq/5mfnP+CiIT/cHVx/wBBAL7/AKrCzf+nvsn/nLK9/4mdqP92hpH/bHmE/3F7hf99hY3/iY6V/5GVmv+bnqH/pKen/6aop/+Xmpf/fYB7/2hrZv8AQQC+/wCwx9L/qsDL/5uvuv+Bk57/Z3aB/1lkbv9bY23/aG52/3h8gv+HiY3/l5ea/6Wlpf+oqKb/mZmV/3x8d/9lZWD/AEEAvv8Ar8TP/6e7xv+TprD/dISP/1RibP9CTFb/Q0pT/1JWXv9maG7/e3t//5GQkv+koqL/qqil/5uYlP99e3X/ZWNc/wFBAL7/AKvAyv+htcD/i52n/2l5g/9GU13/MjtF/zI4Qf9DRk3/Wltg/3Nydf+Nioz/o6Cf/6qnpP+bmJP/fXp0/2VhWv9KnAfIZr77JQAAAABJRU5ErkJggg==',
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
      image: 'belajar_dasar_pemrograman_javascript_logo_230421133231.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/AKCGcP+cgm3/l31o/5R6Zv+Uemj/lnxr/5J5av+Hb2L/eWJX/3JdU/94ZV3/hnVv/41+ev+Cc3H/aFtZ/1NGRP8AQQC+/wCTemb/kHdi/4tyXv+Ib13/iXBf/4tzY/+JcWP/f2hc/3FbUv9qVk7/b11X/3xsaP+CdHH/dmlo/1xQT/9GOzv/AEEAvv8AiHFf/4VuXP+Baln/f2hY/4FqW/+EbmH/g21i/3pmXf9tWlP/ZlRP/2paWP92aGf/em1u/2xhY/9RR0r/OzI1/wBBAL7/AI14af+KdWf/h3Jk/4ZxZf+JdGn/jXlw/416c/+GdG7/emlm/3JjYv90aGn/fXN2/392e/9waW//VU5V/z85QP8AQQC+/wCgjoP/noyB/5yKgP+cioH/n42G/6OSjf+klJD/nY+N/5KEhf+JfoH/ioCG/5CJkf+Ri5T/gX2I/2Vjbv9QTlr/AEEAvv8As6Ob/7Kimv+woZr/sKGb/7Kkn/+2qKb/t6qq/7Ckp/+kmp//mpKa/5mTnf+emqb/nZup/42Nnf9zdIX/X2Bx/wBBAL7/ALSmoP+zpaD/sqWg/7Klof+zp6X/tqqq/7Wqrf+upKr/oZmi/5eRnP+UkZ//mJen/5eYqv+Ii57/cHSI/11hd/8AQQC+/wCgk4//oJOP/6CTkP+fk5H/n5SU/6CVmP+elJn/lo6W/4mDjv9+e4j/fHqK/39/kv9+gZb/cXaN/1xhev9KUWr/AEEAvv8AhHdz/4V4dP+FeHX/hHh2/4N3eP+Cd3v/f3Z8/3dwef9sZnL/Yl5u/19fcf9jZHn/Y2d+/1led/9FTGf/Nj5Z/wBBAL7/AHFiXf9yY17/cmRg/3FjYf9vYmL/bWFk/2pgZf9kW2T/WlRg/1NPXv9SUGP/Vldt/1hbc/9PVG7/PkRf/zA3U/8AQQC+/wBtXFT/bl5X/29eWf9tXVn/aVpZ/2dZWv9kWFz/YVZe/1tTXv9WUV//WFVn/11dcv9fYnn/V1x1/0dNaP86QVz/AEEAvv8AdWJX/3ZjWf92Y1r/cmBZ/21cV/9qWVj/aFpb/2dbYP9lW2T/ZV1q/2lkdP9vbYD/cXGH/2hrgv9YXHX/S1Bq/wBBAL7/AIBpW/+Aalz/fmhc/3hjWf9wXFT/a1hU/2pZWP9sXV//bmFn/3BmcP92b3z/fHiI/3x7jv9yc4n/YWN6/1NWbv8AQQC+/wCGbFv/hWxc/4FoWf94X1P/bVZM/2ZQSf9lUU3/aFZW/2xdYf9xZW3/eG56/312hf97d4n/b22B/1xbcf9NTWT/AEEAvv8Ah2tY/4VpV/9+Y1L/c1hJ/2VMP/9cRDv/WkQ+/15KSP9kU1X/alxi/3Fmb/91bXr/cWx8/2Nfcf9NS1//PjxR/wFBAL7/AIZpVP+DZlP/e19N/25SQv9eRDf/VDsx/1I7NP9WQT7/XEpL/2NUWf9qXmb/bWRw/2hicf9YVGX/Qj9S/zEvQ/+7sVGuB1YpwQAAAABJRU5ErkJggg==',
      level: 'Dasar',
      link: 'https://www.dicoding.com/academies/256-belajar-dasar-pemrograman-javascript',
    },
    {
      step: 3,
      link: 'https://www.dicoding.com/academies/261-belajar-membuat-aplikasi-back-end-untuk-pemula',
      title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
      rating: 4.90,
      level: 'Pemula',
      image: 'belajar_membuat_aplikasi_back_end_untuk_pemula_logo_230421133303.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/AMbQ1f/Bys//v8fL/8XLzv/O09T/1NfX/9XX1//Y2tn/3+Lg/+Hk4v/R1tT/srm4/5uko/+gq6v/v8zM/93p6v8AQQC+/wDK1dr/xc/U/8PMz//I0NL/0tjZ/9jc3f/Z3Nz/3N/d/+Lm5P/k6Ob/1NrZ/7e/vv+hq6r/p7Oz/8bU1f/k8vP/AEEAvv8Ay9fc/8bR1f/DzdD/yNDT/9LZ2v/Y3d3/2N3c/9ne3f/e4+L/3uXj/8/X1f+yvLz/namq/6Sys//E1NX/4fL0/wBBAL7/AMPQ1f+9yc3/uMTH/73Hyf/Gz9D/y9PT/8rR0f/J0M//ytLR/8jR0P+3wsH/mqen/4WVlv+Mnp//q77B/8jc3/8AQQC+/wC0w8f/rLq+/6aztv+qtrf/s72+/7jBwf+1vr3/sLm4/624t/+ns7P/lKKi/3eHiP9hdHb/Znt+/4Oanv+ftrr/AEEAvv8ApLS3/5uqrf+ToqT/lqSl/5+srf+ksLD/oays/5qmpf+UoaH/jJub/3eJiv9abnD/Q1pd/0ZfY/9ge4D/eZWa/wBBAL7/AJGipP+HmJr/f4+Q/4KRkv+Nm5v/lKKh/5Gfn/+KmZj/hJSU/3yOj/9pfoD/TWVo/zdSVv85Vlv/UG91/2eHjf8AQQC+/wB1h4n/a3x9/2JzdP9md3f/dISE/3+Ojv9/j47/eYqK/3WIiP9whYf/Ynt9/0tmav84Vlv/OVpg/01xeP9iho7/AEEAvv8AUmRl/0dZWf8+UFD/RFVV/1VlZf9ic3L/ZXZ1/2F0dP9fdHX/X3Z4/1dydf9GZGn/Nlhe/zdcZP9KcXn/XISN/wBBAL7/ADZISP8rPDz/IjQz/yk6Of87TEv/Slta/01fXv9IXVz/R15e/0ljZf9HZGj/O1xh/y9TWv8wWGD/QGp0/1B7hv8AQQC+/wA0RkT/KTo5/yEyMP8oOTf/OktK/0haWP9IW1r/QFVU/zxTVP89WFv/PVxg/zRXXv8qUVn/KlRd/zdjbv9Fcn7/AEEAvv8ATl9c/0NUUf88TEr/RFRS/1dnZf9idHL/XnBv/09kZP9FXl//RGBj/0NjaP87X2b/MFlh/y5aZP83ZnH/QnJ+/wBBAL7/AG9+e/9ldHH/YG9s/2p6d/9+jov/iZmX/4CSkf9rgID/W3R1/1Zydf9TdHn/SnB3/z9ocf86Z3L/QG98/0h5hv8AQQC+/wB8iob/dIJ+/3KAff+Bj4z/mKek/6Ozsf+Yqqn/gJWU/2uEhf9jf4L/Xn+F/1V7g/9Jc3z/QW97/0V1gv9LfYr/AEEAvv8AcH56/2t4dP9tenb/gI6K/5uppv+ouLX/na+t/4OYl/9thYb/Yn+C/15/hf9Ve4P/SHJ8/z9tev9BcX//RniG/wFBAL7/AGBtaP9baGT/YG1o/3aDf/+Uop7/o7Kv/5mqqP9+k5L/Z3+B/1x5fP9YeX//T3V+/0Jtd/86aHT/Omt5/z9xf//SQpp9fDVE6gAAAABJRU5ErkJggg==',
      hours: 45,
      summary: 'Pelajari dasar dalam membangun RESTful API, dari HTTP server, routing, hingga membangun Back-End untuk aplikasi yang nyata.',
      totalStudent: '109.2k'
    },
    {
      step: 4,
      link: 'https://www.dicoding.com/academies/266-architecting-on-aws-membangun-arsitektur-cloud-di-aws',
      title: 'Architecting on AWS (Membangun Arsitektur Cloud di AWS)',
      hours: 40,
      image: 'architecting_on_aws_membangun_arsitektur_cloud_di_aws_logo_230421133324.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/AAAAEv8AACj/AyFO/ylFcv85U4D/K0Fv/wwfTf8ADTr/EiFM/0ZSfP91f6j/g4yy/2tzl/9CSWz/ICZH/w4UNf8AQQC+/wAAABz/AAk0/xEvW/84VID/SGKO/zlPe/8YK1j/BhdD/xspVP9OWoP/fYeu/4uTuP9zep3/SlBy/yctTf8VGzv/AEEAvv8AAAAn/wAYQf8jQWr/TGiR/1x1oP9LYYv/Jzpk/xIjTf8lM1z/V2OK/4aQtv+UncD/fYSm/1Rbev8xN1b/HyVD/wBBAL7/AAADKf8AHkX/LUtx/1l0m/9pgqn/VWuT/y5Baf8XJ0//KTZc/1tmi/+Mlrj/nKTF/4aNrP9dZIH/OkFd/ykvSv8AQQC+/wAAACL/ABw//y5Lb/9cdpr/bISp/1dskf8tQGX/FCRI/yYzVv9aZYf/jpi4/6Gpx/+NlbH/Zm6I/0VLZP8zOlL/AEEAvv8AAAAY/wAYOP8tSWn/W3WW/2uDpf9Uaov/KTxd/xAgQf8jMVH/WmaE/5Kcuf+oscz/l5+4/3J6kf9SWW//QUhd/wBBAL7/AAAAFv8AGTb/L0to/114lf9thaP/VWqJ/yk8Wv8RIT//JjRR/2BtiP+bpr//s73V/6Stw/+BiZ3/YWl8/1FZa/8AQQC+/wAAARv/AyA6/zZSbP9jfZj/cYml/1huiv8uQV3/FyhD/y89WP9qeJD/prHI/77J3v+vucz/jJWn/212hv9dZnb/AEEAvv8AAAkh/wonP/86V2//ZYCZ/3OLpP9acYr/MkVf/x4vSP83R1//c4GY/626zv/Dz+L/sb3O/42YqP9ueYj/X2p4/wBBAL7/AAANIv8KKT//OFVs/2F8k/9th57/V26G/zFGXv8hM0v/PE1j/3aGm/+su87/vszd/6m2xv+EkZ//ZnJ//1dkcP8AQQC+/wAACyD/BSU6/zBOY/9Wcoj/YnyT/05mff8sQln/IDRK/zxOZP90hZr/pbbI/7LC0v+aqbj/dYSR/1hncv9LWmX/AEEAvv8AAAgc/wAfNP8lRFr/SWZ8/1Rwhv9CXHL/JT1T/xwySP85TWL/b4KV/5utv/+jtcX/iZqp/2V2gv9LXGf/QFFc/wBBAL7/AAAHG/8AGzD/HDxR/zxbcP9HY3n/N1Fo/x01TP8WLUP/M0le/2Z6jv+OobP/kqa1/3iLmf9WaXX/QFNe/zlLVv8AQQC+/wAABxv/ABkt/xU2S/8xUGb/Oldt/ypGXP8SLEL/DSU7/ylAVf9Zb4P/fZKk/3+UpP9leoj/R1to/zVKVf8xRVD/AEEAvv8AAAcc/wAXK/8PMEb/J0dd/y5NY/8eO1H/ByE4/wIbMf8dNUr/S2F1/2yClP9tgpP/U2l3/zhNWv8qQEz/KT5J/wFBAL7/AAAHG/8AFSr/Cy1C/yFCWP8nRlz/FjNK/wAaMf8AEyr/FC1C/0FYbP9gd4n/YHaH/0hebP8uRFH/IzlF/yI5RP+3Zgt1YeKXWgAAAABJRU5ErkJggg==',
      level: 'Menengah',
      rating: 4.83,
      summary: 'Pelajari cara membangun arsitektur cloud di AWS, dari yang sederhana dengan Amazon S3 hingga yang canggih dengan teknologi serverless.',
      totalStudent: '13.9k'
    },
    {
      step: 5,
      link: 'https://www.dicoding.com/academies/610-menjadi-node-js-application-developer',
      title: 'Menjadi Node.js Application Developer',
      image: 'dos_menjadi_node_js_application_developer_logo_191023134559.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/ALzG1v+5wtD/trvG/7O0u/+ysLL/t7Gv/8C5tf/NxsL/2dTS/93d3//W3eT/xtXj/7bM4f+ryOT/qMrr/6nO8f8AQQC+/wC6wc3/t7zH/7O1vP+vrbD/raim/7Gnov+5r6f/xry0/9LLxf/Y1dP/09fb/8bR3P+3ytz/r8jh/63M6f+u0PD/AEEAvv8AvLzC/7i2u/+yra7/rKSg/6mdlf+qm4//sqGT/7+uoP/MvrL/08rC/9HPzP/HzNH/vMnV/7bK3P+2z+b/uNTu/wBBAL7/AMK5tv++s6//tqmh/6+dkf+plIT/qZF9/6+Wf/+7ooz/ybOe/9LBsP/SyL3/y8jF/8LHy/++ytX/wNHg/8PX6f8AQQC+/wDJt6r/xbCi/7yllP+zmYP/rY50/6uKbP+xjm7/vJp6/8qqjf/TuaD/1cGu/8/Dt//HxL//xMfJ/8bO1f/J1N3/AEEAvv8AzbGb/8iqk/+/n4T/tpJz/6+HZP+tg1z/sode/76Tav/Lo33/1bKQ/9a6nv/QvKf/yLyv/8S/uP/FxcP/x8rL/wBBAL7/AMyoiv/HooL/v5Zz/7aKY/+wgFX/r3xO/7SBUP/AjV3/zZ1w/9asg//Ws5H/z7SZ/8azn//Btaj/wLqy/8K+uf8AQQC+/wDOpID/yJ14/8CSav+4hlr/sn1N/7J6R/+4f0r/w4xX/9Gcav/Zq33/2bKL/9Gykv/HsJj/wbGg/7+1qf/Aua//AEEAvv8A1aiC/8+hev/Hlmv/vopb/7iBTv+4fkj/voRM/8qQWf/WoGz/3q5//961jP/WtpX/zLSb/8a1ov/Euav/xbyy/wBBAL7/AN6yjP/Yq4P/zp50/8SRY/++h1X/vYRP/8KIUv/MlF7/16Nw/9+wgv/et5D/1riY/823n//HuKj/x72y/8jBuf8AQQC+/wDhuJb/2rCM/8+ie//ElGn/vIla/7mEUv+9h1T/xZBe/86dbv/TqX//0q+M/8qwlf/CsJ3/vrOn/765sv/Avrr/AEEAvv8A27eZ/9Ouj//IoH7/vJFr/7OFXP+vf1P/sYBT/7eIXP+9k2n/wJx4/72gg/+1oYz/raKV/6qmoP+sra3/r7O1/wBBAL7/ANG0nP/Kq5L/v56C/7SQcP+shWL/qX9a/6qAWv+vhmH/s49s/7OVeP+umIL/pZiK/52Ykv+anZ//naWs/6Cstf8AQQC+/wDQuKf/yrGe/8Glj/+4mYD/s5F0/7GObv+zkG//uJZ2/7qdgP+5oYv/sqKS/6egmf+foaH/nKau/5+uvP+jtcX/AEEAvv8A2ca4/9S/sf/NtqT/x62Y/8Soj//Gp4z/yquP/8+yl//RuKH/zryq/8a7sP+6uLb/sbi+/669yv+xxdj/tczh/wFBAL7/AOLSx//ezMD/2MS1/9W9q//UuqT/2Luj/93Bp//iyLD/5c+6/+HSw//Y0Mj/zM3N/8LM1f+/0eH/wtnv/8bg+P/9Twfe6p9eQgAAAABJRU5ErkJggg==',
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
      image: 'belajar_fundamental_aplikasi_back_end_logo_230421133405.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/ADNGYP9QYnz/eYuj/56uxv+6x97/0Nvw/+Hq/v/n7v//3+T1/8/T4//Hydj/yMrZ/8jJ1/+1tsT/kpKg/3V2hP8AQQC+/wAvQVr/TF11/3WFnf+aqL//tcDW/8nT5//Z4PP/3eL0/9PW5//Cw9P/t7jH/7e3xf+0tMH/n56s/3p5hv9cW2j/AEEAvv8AJzZN/0RSaf9tepD/kp2y/6y1yf+/xdj/zNDi/87Q4f/BwtH/rq27/6Kgrv+gnqr/m5ik/4N/i/9bV2P/OzdD/wBBAL7/AB4oPv87RVr/ZW6C/4qRpP+kqLv/trjJ/8LC0v/CwM//tLG+/6Gcqf+WkJv/lI2Y/46Hkf90bHf/SkJM/ykhK/8AQQC+/wAaIDP/OD1Q/2Jnef+Ii5z/o6Oz/7Wzwv/AvMn/wLrG/7Ortv+imaP/mY+Z/5uQmv+XjJX/fnN7/1NIUP8yJi//AEEAvv8AHyEy/z4/UP9qaXr/kI+e/6untv+9t8T/x7/L/8e9yP+7sLn/raCp/6qcpP+xoqr/sqOq/5uMk/9yY2r/UUJI/wBBAL7/AC0rO/9LSVn/eHSD/5+aqP+5sr//ysHM/9LH0v/Qw8z/xLW+/7iosP+5qK//xbS6/8u6wP+5p63/koCF/3FfZf8AQQC+/wA4NEP/V1Jh/4N9jP+qorD/w7nG/9HF0f/WydL/0MHK/8Kxuf+2pKv/uaat/8m2vP/TwMX/xLG2/5+Lkf9/bHH/AEEAvv8AOTRD/1dRYP+DfIr/qKCt/8C2wv/Lv8r/zb/J/8O0vP+xoKj/o5GY/6eUmv+5pqz/xrK4/7ilqv+UgYb/dWJn/wBBAL7/ACwnN/9JRVT/dG59/5mSoP+wp7T/u7C8/7quuP+uoKn/mYqS/4p5gf+Ne4P/oI6V/66cov+ikJb/fmxz/19NVP8AQQC+/wAXFSb/NDFC/19ba/+Efo7/m5Si/6aeq/+nnKj/mo6Z/4V3gv91Z3D/eGly/4x9hf+bi5T/j4CI/2xcZP9MPUX/AEEAvv8AAgMW/x8fMv9ISFr/bWt8/4aCkv+Tjp3/lY6c/4uCj/93bXn/aF1o/2xga/+AdX//kISO/4R4g/9hVV//QTZA/wBBAL7/AAAACv8NESX/NTdL/1habP9xcYP/gH6P/4SBkP98d4X/aWNx/1tUYv9gWGX/dW16/4R8if94cHz/VExY/zQsOP8AQQC+/wAAAAH/AAQa/yIoPv9DSFz/W11x/2lqff9uboD/ZmV2/1VSYv9HQ1P/S0dW/2Bbav9uanj/YFxq/zs3Rf8aFiT/AEEAvv8AAAAA/wAAEP8RGjH/LzZN/0RKX/9RVWn/Vlhr/05PYf87O03/LSw9/zAvP/9DQVH/T05e/0A/T/8ZGCj/AAAG/wFBAL7/AAAAAP8AAAr/BxAo/yMrQv82PFL/QUZb/0VIXP88PlH/KSo8/xkaK/8cHC3/LS0+/zk5Sf8oKTn/AQER/wAAAP/8qnepXzOEcgAAAABJRU5ErkJggg==',
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
      image: 'menjadi_back_end_developer_expert_logo_230421133615.jpg',
      imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/ANPLtf/g18H/7ePN//Dm0P/q4Mn/49jA/9/UvP/d0rr/2My0/9HGrv/Qxq7/2dC4/+bexv/s5c3/5+HK/+HbxP8AQQC+/wDi2sf/7eXS//nw3f/68d3/8ejU/+fdyf/h18L/3tO+/9fNuP/PxrH/zsWx/9fPu//k3cr/6+XR/+fiz//h3Mn/AEEAvv8A7ufa//jx5P//+ez//vbp//Lp2//j28z/2tHD/9TLvf/MxLb/xLyu/8O8rv/Mxrn/2tXJ/+Le0v/f3NH/2tfL/wBBAL7/AOfi3f/w6uX/9vDq/+/p4//f2NL/zcbA/8G6tP+6s63/saum/6qkn/+ppaH/tLGu/8TCv//Ozcr/zc3L/8jIx/8AQQC+/wDQzM//19PW/9rW2f/QzM//vLi7/6ikp/+cl5v/lZGV/46Kj/+HhYv/iYeO/5WVnf+nqLD/srW+/7O3wP+wtL3/AEEAvv8At7XB/7y7xv++vMf/srC7/5yapv+HhZL/e3qH/3Z1g/9xcH//bG19/25wgv97f5H/jZKm/5qgtf+cpLn/mqG3/wBBAL7/AKysvv+wscP/sLDD/6Ojtv+MjKD/eHiN/25uhP9qa4L/ZmmB/2Jlf/9jaIP/bnWS/36Hpf+KlLT/jJe4/4qWtv8AQQC+/wCwscn/tLXN/7O0zP+lpr//jpCq/3t9mP9zdZL/cHSS/21ykf9mbI7/Y2uP/2l0mf92gqn/f422/4CPuf9+jbf/AEEAvv8AubvW/72/2v+7vtn/rbDM/5ibuP+Hiqn/gISl/3+Ep/96gab/b3ig/2dym/9ndKD/b36s/3WFtf91hrf/coS1/wBBAL7/AL/B3P/CxeD/wcPf/7O30/+fo8H/kJW1/4yRtP+Mk7j/hY62/3eCrP9pdqT/ZHSj/2h5q/9tgLP/bIG2/2p/tf8AQQC+/wDAwtv/w8bf/8LF3/+1uNT/o6fE/5abuv+Umrz/lZ3B/46YwP99ibT/bHqo/2R1pv9neq3/bIG3/26FvP9uhbz/AEEAvv8Av8HW/8PF2v/Bw9r/tbfP/6Onwf+YnLn/l529/5mhw/+Rm8L/f4y2/2x8qf9ld6f/an+y/3WLwP98k8r/fpbO/wBBAL7/AL6/0P/BwtP/vr/S/7Cyxv+doLf/kZav/5CWs/+Smrn/ipS3/3eEq/9ldJ//YHKh/2uAsf98k8f/iqLY/5Cq4P8AQQC+/wC5ucX/urvH/7W2xP+kprb/j5Kk/4GFmv99g5z/fYSh/3N9nv9fbZH/Tl6H/01gjP9ec6P/d4/A/4yl2f+XseX/AEEAvv8Ar6+4/6+vuP+nqLL/lJWh/3t9jP9pbX//Y2h+/19ngf9UXnz/P0xu/y8/Zf8xRG7/R1yK/2Z+rv+Bmsz/j6nc/wFBAL7/AKenrf+mpq3/nZ2m/4eIk/9sbnv/WFts/09Vaf9KUWr/PUdj/yc0Vf8YKEz/Gy5X/zRKdv9Xb53/dY6//4Wf0f8VYe95mmGpWQAAAABJRU5ErkJggg==',
      level: 'Mahir',
      rating: 4.90,
      summary: 'Pelajari teknik Automation Testing, Clean Architecture, CI/CD, Security, dan Scalability dalam membangun RESTful API berskala industri.',
      title: 'Menjadi Back-End Developer Expert',
      totalStudent: '3.4k'
    }
  ]
}