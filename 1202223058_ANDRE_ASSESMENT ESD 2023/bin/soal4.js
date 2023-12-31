function cekDuplikat(angka) {
    // Buat array kosong untuk menyimpan angka yang sudah pernah muncul
    let angkaUdahAda = [];
  
    // Iterasi setiap angka dalam input
    for (let i = 0; i < angka.length; i++) {
      // Jika angka tersebut sudah pernah muncul, kembalikan true
      if (angkaUdahAda.includes(angka[i])) {
        return true;
      }
  
      // Tambahkan angka tersebut ke array angkaUdahAda
      angkaUdahAda.push(angka[i]);
    }
  
    // Jika tidak ada angka yang duplikat, kembalikan false
    return false;
  }
  const input = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18, 20, 17, 19];

  console.log(cekDuplikat(input)); // true
    