function isPalindrome(str) {
    // Mengubah semua huruf menjadi lowercase
    str = str.toLowerCase();
  
    // Mendapatkan panjang string
    let len = str.length;
  
    // Mengecek huruf pertama dan terakhir
    if (str[0] !== str[len - 1]) {
      return "suka blyat";
    }
  
    // Jika huruf pertama dan terakhir sama, maka mengecek huruf kedua dan kedua dari belakang
    for (let i = 1; i < len - 1; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return "suka blyat";
      }
    }
  
    // Jika semua huruf sama, maka mengembalikan true
    return "eureeka!";
  }
  
  const str = "Angsa";
  const str2 = "KataK";
  const str3 = "kasur empuk";
  const str_soal1 = "Aku Suka Kamu";
  const str_soal2 = "Ibu Ratna antar ubi";

  console.log(isPalindrome(str)); // true
  console.log(isPalindrome(str2)); // false
  console.log(isPalindrome(str3));
  console.log(isPalindrome(str_soal1));
  console.log(isPalindrome(str_soal2));
    