const datas = {
  success: true,
  chat_data: {
    chat_welcome_msg: 'Welcome to chat bot assistant',
    data: [
      {
        itemId: 1,
        subject: 'AGRONOMI',
        options: [
          {
            subject: 'BJR',
            options: [
              {subject: 'Kenapa bjr saya berubah setiap bulan?'},
              {subject: 'Kenapa bjr saya tidak sesuai dengan bulan lalu?'},
              {subject: 'Kenapa bjr tidak sesuai dengan catatan mandor?'},
              {subject: 'Ada yang main bjr di afdeling?'},
            ],
          },
          {
            subject: 'JANJANG',
            options: [
              {subject: 'Kenapa catatan janjang saya beda di gajihan?'},
              {subject: 'Ada permainan janjang Angin di afdeling'},
              {
                subject:
                  'Ada janjang saya yang hilang dan tidak dibayar oleh perusahaan',
              },
              {subject: 'Kenapa Janjang saya selisih dengan gajihan?'},
            ],
          },
          {
            subject: 'BRONDOLAN',
            options: [
              {subject: 'Kenapa brondolan saya tidak dibayar?'},
              {subject: 'Ada permainan brondolan di afdeling'},
              {subject: 'Brondolan saya dengan catatan mandor selisih'},
            ],
          },
        ],
      },
      {
        itemId: 1,
        departement: 'FINANCE',
        options: [
          {
            subject: 'GAJI',
            options: [
              {subject: 'Selisih Gaji'},
              {subject: 'Gaji banyak potongan'},
              {subject: 'Gantungan gaji tidak dibayar'},
              {subject: 'Kontantan terlambat kasih uangnya'},
              {
                subject:
                  'Ada yang nitip gaji dengan mandor atau karyawan yang lain',
              },
            ],
          },
          {
            subject: 'PERHITUNGAN',
            options: [
              {subject: 'Bagaimana perhitungan janjang'},
              {subject: 'Kenapa Gaji saya tidak sesuai?'},
              {subject: 'Kenapa Gaji saya tidak dibayar?'},
            ],
          },
        ],
      },
    ],
  },
};

export default datas;
