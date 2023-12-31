function decryptChat(encryptedText) {
    var decryptedText = "";

    for (var i = 0; i < encryptedText.length; i++) {
      var char = encryptedText[i];

      if (char >= 'A' && char <= 'Z') {
        decryptedText += String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + 21) % 26) + 'A'.charCodeAt(0));
      }else if (char >= 'a' && char <= 'z') {

        decryptedText += String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + 21) % 26) + 'a'.charCodeAt(0));
      }else {
        decryptedText += char;
      }
    }

    return decryptedText;
  }
  
  var encryptedChat = "xfqfr bfmdz\ngjxtp lzj rfz ifkyfw jxi snm\ngwt, gjxtp qz rfz rfpfs in bfwlty lfp?\nfpz xfdfsl pfrz, rfz lfp ofin ufhfwpz\ndfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu";
  var decryptedChat = decryptChat(encryptedChat);
  
  console.log(decryptedChat);
  