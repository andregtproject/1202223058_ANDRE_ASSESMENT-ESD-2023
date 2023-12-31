// BROKEN

function tersangka(nama, kebiasaan, foto) {
    if (nama === "Ningguang" || nama === "Hutao" || (nama === "Xiao" && foto.kue === "ada")) {
      return false;
    } else {
      return true;
    }
  }
  
  const tersangkaNama = "Childe";
  const tersangkaKebiasaan = "selalu membawa air mineral dan meletakkannya di meja sebelum memberikan kado";
  const tersangkaFoto = { kue: "tidak ada" };
  
  const tersangkaStatus = tersangka(tersangkaNama, tersangkaKebiasaan, tersangkaFoto);
  
  if (tersangkaStatus) {
    console.log(`Tersangkanya adalah ${tersangkaNama}`);
  } else {
    console.log("Tidak ada tersangka");
  }
  