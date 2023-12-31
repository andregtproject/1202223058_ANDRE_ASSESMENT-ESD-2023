// List menu restoran
const menu = {
    "ayam goreng krispi": {
      "tipe": "makanan",
      "harga": 15000,
    },
    "ayam puk puk": {
      "tipe": "makanan",
      "harga": 13000,
    },
    "ayam bakar": {
      "tipe": "makanan",
      "harga": 20000,
    },
    "es teh": {
      "tipe": "minuman",
      "harga": 5000,
    },
    "es jeruk": {
      "tipe": "minuman",
      "harga": 7000,
    },
  };
  
  // Pajak makanan
  const pajakMakanan = 0.05;
  
  // Pajak minuman
  const pajakMinuman = 0.03;
  
  // Pajak transaksi
  const pajakTransaksi = 0.15;
  
  // Hitung total biaya makanan
  function hitungBiayaMakanan(menuItem, jumlah) {
    const harga = menu[menuItem]["harga"] * jumlah;
    const pajak = harga * pajakMakanan;
    return harga + pajak;
  }
  
  // Hitung total biaya minuman
  function hitungBiayaMinuman(menuItem, jumlah) {
    const harga = menu[menuItem]["harga"] * jumlah;
    const pajak = harga * pajakMinuman;
    return harga + pajak;
  }
  
  // Hitung total biaya transaksi
  function hitungBiayaTransaksi(totalBiaya) {
    const pajak = totalBiaya * pajakTransaksi;
    return totalBiaya + pajak;
  }
  
  // Hitung biaya Rehan Whangsap
  const biayaRehan = hitungBiayaMakanan("ayam bakar", 2) + hitungBiayaMinuman("es teh", 1);
  
  // Hitung biaya Amba Roni
  const biayaAmba = hitungBiayaMakanan("ayam puk puk", 1) + hitungBiayaMinuman("es teh", 3);
  
  // Hitung biaya Faiz Ngawi
  const biayaFaiz =
    hitungBiayaMakanan("ayam goreng krispi", 1) +
    hitungBiayaMakanan("ayam puk puk", 1) +
    hitungBiayaMakanan("ayam bakar", 1) +
    hitungBiayaMinuman("es teh", 1) +
    hitungBiayaMinuman("es jeruk", 1);
  
  // Tampilkan hasil
  console.log("Biaya Rehan Whangsap: ", biayaRehan);
  console.log("Biaya Amba Roni: ", biayaAmba);
  console.log("Biaya Faiz Ngawi: ", biayaFaiz);
  