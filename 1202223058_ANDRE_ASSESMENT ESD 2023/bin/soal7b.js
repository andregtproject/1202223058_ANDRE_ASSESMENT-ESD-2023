// Fungsi untuk mendekripsi pesan obrolan menggunakan sandi Caesar sederhana dengan pergeseran 21
function decryptChat(encryptedText) {
    var decryptedText = "";
  
    // Iterasi melalui setiap karakter dalam teks terenkripsi
    for (var i = 0; i < encryptedText.length; i++) {
      var char = encryptedText[i];
  
      // Mendekripsi huruf kapital
      if (char >= 'A' && char <= 'Z') {
        // Geser huruf kapital sebanyak 21 posisi, memastikan melingkar di sekitar alfabet
        decryptedText += String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + 21) % 26) + 'A'.charCodeAt(0));
      }
      // Mendekripsi huruf kecil
      else if (char >= 'a' && char <= 'z') {
        // Geser huruf kecil sebanyak 21 posisi, memastikan melingkar di sekitar alfabet
        decryptedText += String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + 21) % 26) + 'a'.charCodeAt(0));
      }
      // Menjaga karakter non-alfabet tidak berubah
      else {
        decryptedText += char;
      }
    }
  
    // Mengembalikan teks yang telah dideskripsi
    return decryptedText;
  }
  
  // Contoh penggunaan
  var encryptedChat = "xfqfr bfmdz\ngjxtp lzj rfz ifkyfw jxi snm\ngwt, gjxtp qz rfz rfpfs in bfwlty lfp?\nfpz xfdfsl pfrz, rfz lfp ofin ufhfwpz\ndfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu";
  var decryptedChat = decryptChat(encryptedChat);
  
  // Menampilkan hasil obrolan yang telah dideskripsi
  console.log(decryptedChat);
  