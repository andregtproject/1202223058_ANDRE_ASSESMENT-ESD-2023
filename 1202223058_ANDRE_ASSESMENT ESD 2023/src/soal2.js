function isPalindrome(str) {
    str = str.toLowerCase();

    let len = str.length;

    if (str[0] !== str[len - 1]) {
      return "suka blyat";
    }
  
    for (let i = 1; i < len - 1; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return "suka blyat";
      }
    }
    return "eureeka!";
  }
  
  const str = "Angsa";
  const str2 = "KataK";
  const str3 = "kasur empuk";
  const str_soal1 = "Aku Suka Kamu";
  const str_soal2 = "Ibu Ratna antar ubi";

  console.log(isPalindrome(str));
  console.log(isPalindrome(str2));
  console.log(isPalindrome(str3));
  console.log(isPalindrome(str_soal1));
  console.log(isPalindrome(str_soal2));
    