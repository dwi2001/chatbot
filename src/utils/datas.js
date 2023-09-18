const datas = {
  success: true,
  chat_data: {
    chat_welcome_msg: 'Welcome to chat bot assistant',
    data: [
      {
        itemId: 1,
        departement: 'AGRONOMI',
        keyword: [
          {
            keywordName: 'BJR',
            keywordSub: [
              'Kenapa bjr saya berubah setiap bulan?',
              'Kenapa bjr saya tidak sesuai dengan bulan lalu?',
              'Kenapa bjr tidak sesuai dengan catatan mandor?',
              'Ada yang main bjr di afdeling?',
            ],
          },
          {
            keywordName: 'JANJANG',
            keywordSub: [
              'Kenapa catatan janjang saya beda di gajihan?',
              'Ada permainan janjang Angin di afdeling',
              'Ada janjang saya yang hilang dan tidak dibayar oleh perusahaan',
              'Kenapa Janjang saya selisih dengan gajihan?',
            ],
          },
          {
            keywordName: 'BRONDOLAN',
            keywordSub: [
              'Kenapa brondolan saya tidak dibayar?',
              'Ada permainan brondolan di afdeling',
              'Brondolan saya dengan catatan mandor selisih',
            ],
          },
        ],
      },
      {
        itemId: 1,
        departement: 'FINANCE',
        keyword: [
          {
            keywordName: 'GAJI',
            keywordSub: [
              'Selisih Gaji',
              'Gaji banyak potongan',
              'Gantungan gaji tidak dibayar',
              'Kontantan terlambat kasih uangnya',
              'Ada yang nitip gaji dengan mandor atau karyawan yang lain',
            ],
          },
          {
            keywordName: 'PERHITUNGAN',
            keywordSub: [
              'Bagaimana perhitungan janjang',
              'Kenapa Gaji saya tidak sesuai?',
              'Kenapa Gaji saya tidak dibayar?',
            ],
          },
        ],
      },
    ],
  },
};

export default datas;
