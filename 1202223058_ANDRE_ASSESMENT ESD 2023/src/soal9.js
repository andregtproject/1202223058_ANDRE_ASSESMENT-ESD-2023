function cariAnakNakal(namaAnak) {
    let jumlahKasus = {};

    namaAnak.forEach(nama => {
        jumlahKasus[nama] = (jumlahKasus[nama] || 0) + 1;
    });

    let namaTerbanyak = [];
    let maksimumKemunculan = 0;

    for (let nama in jumlahKasus) {
        const kemunculan = jumlahKasus[nama];
        
        if (kemunculan > maksimumKemunculan) {
            maksimumKemunculan = kemunculan;
            namaTerbanyak = [nama];
        } else if (kemunculan === maksimumKemunculan) {
            namaTerbanyak.push(nama);
        }
    }

    namaTerbanyak.sort();

    if (maksimumKemunculan === 1) {
        return "Semuanya anak baik";
    } else {
        return `${namaTerbanyak.join(' dan ')} Nackal`;
    }
}

const input1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
console.log(cariAnakNakal(input1));

const input2 = ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"];
console.log(cariAnakNakal(input2));

const input3 = ["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"];
console.log(cariAnakNakal(input3));
