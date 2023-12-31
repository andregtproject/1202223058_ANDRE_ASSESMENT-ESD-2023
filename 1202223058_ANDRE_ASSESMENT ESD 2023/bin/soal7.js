function decrypt(text) {
    // Buat array dari alfabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
    // Buat array dari huruf yang telah dipindah ke urutan ke-5
    const shiftedAlphabet = alphabet.slice(5).concat(alphabet.slice(0, 5));
  
    // Dekripsi teks
    const decryptedText = text.split("").map(function(char) {
      // Cek apakah karakter merupakan huruf alfabet
      const isAlphabet = alphabet.indexOf(char.toLowerCase()) !== -1;
  
      if (isAlphabet) {
        // Jika ya, kembalikan huruf yang sesuai dengan alfabet
        const isUpperCase = char === char.toUpperCase();
        const index = shiftedAlphabet.indexOf(char.toLowerCase());
        const decryptedChar = isUpperCase
          ? shiftedAlphabet[index].toUpperCase()
          : shiftedAlphabet[index];
  
        return decryptedChar;
      } else {
        // Jika bukan huruf alfabet, kembalikan karakter asli
        return char;
      }
    }).join("");
  
    return decryptedText;
  }
  
  // Dekripsi isi chat
  const encryptedChat = "xfqfr bfmdz\ngjxtp lzj rfz ifkyfw jxi snm\ngwt, gjxtp qz rfz rfpfs in bfwlty lfp?\nfpz xfdfsl pfrz, rfz lfp ofin ufhfwpz\ndfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu";
  const decryptedChat = decrypt(encryptedChat);
  
  // Tampilkan isi chat yang telah didekripsi
  console.log(decryptedChat);
  