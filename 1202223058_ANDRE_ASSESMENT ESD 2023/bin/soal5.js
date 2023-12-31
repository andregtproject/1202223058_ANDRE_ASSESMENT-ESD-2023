// BROKEN


function countUsernameCombinations(name) {
    // Pisahkan nama menjadi array huruf
    const letters = name.toLowerCase().split("");
  
    // Hitung jumlah huruf dalam nama
    const length = letters.length;
  
    // Inisialisasi jumlah kombinasi
    let count = 0;
  
    // Perulangan untuk setiap panjang username
    for (let i = 1; i <= length; i++) {
      // Perulangan untuk setiap kombinasi huruf
      for (let j = 0; j < letters.length; j++) {
        // Buat username dari kombinasi huruf
        const username = letters.slice(j, j + i).join("");
  
        // Tambahkan jumlah kombinasi
        count++;
      }
    }
  
    // Kembalikan jumlah kombinasi
    return count;
  }
  
  // Contoh penggunaan
  const name = "Naip Lovyu";
  const count = countUsernameCombinations(name);
  
  console.log(count); // 20
  