function cekDuplikat(angka) {
    let angkaUdahAda = [];

    for (let i = 0; i < angka.length; i++) {
      if (angkaUdahAda.includes(angka[i])) {
        return "True";
      }
      angkaUdahAda.push(angka[i]);
    }
    return "False";
  }
  const input = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18, 20, 17, 19];

  console.log(cekDuplikat(input));
    