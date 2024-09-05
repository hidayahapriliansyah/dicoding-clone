type NewPrograms = {
  image: string;
  imgPlaceholder: string;
  organizer: string;
  title: string;
  description: string;
  link: string;
}[]

export const newPrograms: NewPrograms = [
  {
    image: 'dos-dicoding_bangun_negeri_batch_7_image_060824100151.png',
    imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/ADFewP8zXr3/NFy1/zRYqP8zUZn/M0yL/zZLgf88TX3/P015/z5Ldv85RXH/Mj5t/yw5a/8nNGv/IzJr/yEwbP8AQQC+/wA2YsH/OGK+/zpht/86Xar/OFab/zlSjf89UYT/Q1OA/0dUfv9GUnr/QU12/zpGcv8zP2//LTpu/yg3bf8mNW3/AEEAvv8AN2G6/zlit/87YbD/O12k/zpXlf88U4j/QFOB/0dWff9MWHz/TFd5/0hSdf9ASnH/OENt/zA9a/8qOGn/JzVo/wBBAL7/AC5Wpv8wV6T/Mlad/zNSkv8zTYT/NUp4/zpLcf9CT2//SFJu/0lSbf9ETWn/PEZl/zM9Yf8qNV3/Iy9a/x4rWP8AQQC+/wAjSI//JUmN/yhJh/8pRn3/KkJw/yxAZP8yQV7/OkVd/0BJXf9CSVz/PkVa/zY+Vv8sNVH/IixM/xolSP8VIEb/AEEAvv8AI0aE/yZIg/8qSH7/LEZ0/y1DaP8wQF3/NUJX/zxFVf9CSVX/Q0lV/0BFU/85Pk//LzZL/yUtR/8cJUL/FiE//wBBAL7/ADNSif82VIj/O1aE/z5VfP8/UnD/QVBl/0ZQXv9LUlz/UFRb/1BUWv9MUFj/RkpV/z1CUv8zOk7/KjJK/yUuR/8AQQC+/wBDYJH/R2KR/01ljv9RZYf/U2N8/1Rgcf9XX2n/W2Bl/11gYv9cXWD/V1le/1FTXP9JTVr/QEZX/zg/VP8zOlH/AEEAvv8ARF6N/0lijv9QZoz/VWeH/1hmff9ZY3L/W2Fq/1xfY/9cXV//WVlb/1RUWP9NT1f/RklW/z5DVP82PFL/MjlQ/wBBAL7/ADZOff87Un7/Q1d+/0lZev9NWXH/T1dn/1BUXv9QUVf/Tk5R/0lITf9DQ0n/PD1I/zU4SP8uM0j/Jy1G/yMqRP8AQQC+/wAmPG//LEBw/zRGcf87Sm3/QEpm/0JJXf9ER1X/Q0RO/0E/SP87OkP/NTRA/y4vP/8nKj//ISU//xogPv8WHD3/AEEAvv8AIjdu/yg7cP8wQXD/N0Rt/z1GZ/9ARWD/QkRY/0NCUv9APk3/OzlI/zQzRv8uLkX/JylG/yAkRv8aH0X/FRxD/wBBAL7/ACg7ef8tP3r/NER5/ztHdv9ASXD/RElq/0hJZP9JSV//SEZb/0RBWP89PFb/NzdW/zAyVv8oLVb/ISdU/xwjUv8AQQC+/wAqPYD/L0CA/zVEf/87Rnv/P0d1/0RIbv9ISWr/S0pn/0tIZP9HRWL/QUBh/zs7Yf8zNmH/Ky9g/yMpXf8eJFv/AEEAvv8AJDZ9/yc4ff8sOnr/MDx1/zQ8bv85PWj/PT5k/0FAYv9CQGD/Pz1f/zo5Xv8zNF//Ky5e/yInXP8ZH1n/ExtX/wFBAL7/ABstd/8eL3b/IjBy/yYxbP8pMGX/LTFf/zIzW/82NVn/ODVZ/zUzWP8wL1j/KSpY/yEkV/8XHFX/DhRR/wgPTv9oneRBv0F60QAAAABJRU5ErkJggg==',
    organizer: 'Dicoding Bangun Negeri',
    title: 'Dicoding Bangun Negeri Batch 7',
    description: 'Program beasiswa yang ditujukan kepada mahasiswa/i aktif Indonesia untuk menjadi talenta digital yang berkualitas melalui beasiswa kelas-kelas favorit Dicoding.',
    link: 'https://www.dicoding.com/bangun-negeri/university',
  },
  {
    image: 'dos-aws_back_end_academy_2024_image_120324110150.png',
    imgPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEZklEQVR4AQBBAL7/AFSKpf9lnLj/d67N/3ew0v9mocb/Uo62/0aCrv9Ef6//QXut/zhvpP8rX5f/IlOM/x9Mhv8dR4L/GUB8/xY7d/8AQQC+/wBGeZP/WIum/2qeu/9rocH/W5O2/0eApv88dZ//OXKg/zdun/8uY5b/IlSJ/xpIf/8XQnr/FT12/xI3cP8OMmv/AEEAvv8AOGR7/0p3j/9di6X/YJCs/1GDov8+cZT/M2eN/zBkjv8uYY3/JVaF/xpIef8TPnD/EThs/xA0aP8MLmP/CCle/wBBAL7/ADRXav9Gan//WoCW/16Gnv9QepX/PmmI/zNggv8xXoP/LluC/yZRev8bRG//FTpn/xQ2Y/8TMmD/Dyxa/wsnVf8AQQC+/wA1TVz/R2Fx/1x4if9hf5L/VHSL/0Fkfv83W3j/NFl4/zFWeP8pTXD/H0Fm/xk5Xv8YNVv/FzFY/xMrUf8OJUz/AEEAvv8AMT5J/0RSXv9YaXf/XnGA/1Foef9AWW3/NVFo/zJQaP8vTWj/J0Rg/x05Vv8XMU//FS1L/xMpR/8NIUD/CBs5/wBBAL7/ACsuNf8+Q0r/U1pj/1ljbv9NW2j/PU1d/zNHWP8wRln/LURZ/yQ7Uf8ZMEf/Eyg//xAjOv8MHjT/BRUr/wAOJP8AQQC+/wA1LzP/SENI/11bYf9jZGz/WV5o/0pTX/9BTlv/P09e/zxOXf8yRVX/JjlJ/x4wQP8ZKjr/EyIy/wkYJ/8CDx7/AEEAvv8AV0lM/2pdYf9/dXr/hoCG/318g/9wdHz/aXF7/2hzfv9jcn3/WWl0/0tcZ/9AUVv/OUlT/zA/SP8kMzv/Gykx/wBBAL7/AINucf+VgoX/qpqe/7Gmq/+qpKr/np6l/5idpf+XoKj/kZ6m/4SUnP90hYz/Z3h//11udP9SY2f/RVVZ/ztLTv8AQQC+/wCZgYT/q5WY/7+ssf/Hub7/wLe9/7Wzuf+ws7r/rra9/6azuv+Xp63/hJab/3WIjP9qfYD/XnJz/1FkZP9GWVn/AEEAvv8Aj3V6/6CIjf+0n6T/uqux/7OqsP+ppq3/o6at/6CpsP+WpKv/hZec/3CFiP9hd3n/Vm1u/0xjYv8/VlX/Nk1K/wBBAL7/AHhdZP+Ib3b/moWM/6CQmP+Yj5f/jYuT/4aLk/+CjZT/d4eN/2R5ff9PZ2r/QVtc/zlUVP8yTkz/KERB/yE9Of8AQQC+/wByV2D/gmly/5J9h/+Xh5H/joWP/4KBiv97gYr/dYKK/2p8g/9XbnP/Q15i/zhWV/80U1P/MlJP/yxMSP8mR0L/AEEAvv8Ah2x2/5Z9h/+lkZv/qZql/5+Xov+Tk53/i5Kc/4WTnP95jpX/Z4CG/1Vzdv9Nbm//TnBv/1BzcP9OcW3/Sm5p/wFBAL7/AJ+EkP+tlaD/vKi0/7+xvP+1rrr/qKm0/6Cps/+aqrP/j6Ss/32Ynv9tjJD/Z4mK/2qOjf9vlJH/b5WR/22Tjv+mvzlWYI6RLwAAAABJRU5ErkJggg==',
    organizer: 'Amazon Web Services (AWS)',
    title: 'AWS Back-End Academy 2024',
    description: 'Program beasiswa pelatihan dan sertifikasi Back-End dari AWS untuk cetak talenta digital di bidang Back-End  development berstandar global.',
    link: 'https://aws.dicoding.com/?_gl=1%2Aw7g5l6%2A_gcl_au%2AMTM0NDg1NDQzNC4xNzIyMDY2MDUy',
  }
]