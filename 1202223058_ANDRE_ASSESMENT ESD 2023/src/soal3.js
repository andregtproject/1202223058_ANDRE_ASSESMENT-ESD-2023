function cariPelakuHilangKue(urutanKedatangan, fotoXiao) {
  let pelakuHilangKue = null;

  // Menginisialisasi keadaan awal kue masih utuh
  let kueUtuh = true;

  // Memeriksa setiap teman berdasarkan urutan kedatangan
  for (let i = 0; i < urutanKedatangan.length; i++) {
    const teman = urutanKedatangan[i];

    // Memeriksa kebiasaan teman saat berada di ruang tamu
    switch (teman) {
      case 'Ningguang':
        if (!kueUtuh) {
          // Jika kue sudah tidak utuh, maka Ningguang bukan pelaku
          pelakuHilangKue = null;
        } else {
          // Jika kue masih utuh, maka pelaku mungkin adalah Ningguang
          pelakuHilangKue = 'Ningguang';
          kueUtuh = false;
        }
        break;
      case 'Hutao':
        if (!kueUtuh) {
          // Jika kue sudah tidak utuh, maka Hutao bukan pelaku
          pelakuHilangKue = null;
        } else {
          // Jika kue masih utuh, maka pelaku mungkin adalah Hutao
          pelakuHilangKue = 'Hutao';
          kueUtuh = false;
        }
        break;
      case 'Xiao':
        // Jika foto Xiao menunjukkan kue utuh, maka pelaku mungkin adalah Xiao
        if (fotoXiao) {
          pelakuHilangKue = 'Xiao';
          kueUtuh = false;
        }
        break;
      case 'Childe':
        if (!kueUtuh) {
          // Jika kue sudah tidak utuh, maka Childe adalah pelaku karena ia datang terakhir dan sudah membawa air mineral :)
          pelakuHilangKue = 'Childe';
        }
        break;
      default:
        break;
    }
  }

  return pelakuHilangKue;
}

const urutanKedatangan = ['Ningguang', 'Hutao', 'Xiao', 'Childe'];
const fotoXiao = true;

const pelakuHilangKue = cariPelakuHilangKue(urutanKedatangan, fotoXiao);

if (pelakuHilangKue) {
  console.log(`Pelaku yang paling mungkin mengambil kue adalah: ${pelakuHilangKue}`);
} else {
  console.log('Tidak dapat menentukan pelaku. Semua teman bersikap wajar.');
}
