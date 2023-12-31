function hitungKembalian(totalPembayaran, totalBelanja) {
    let kembalian = totalPembayaran - totalBelanja;
    const pecahanUang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let hasil = {};

    for (let i = 0; i < pecahanUang.length; i++) {
        const jumlahPecahan = Math.floor(kembalian / pecahanUang[i]);
        if (jumlahPecahan > 0) {
            hasil[`${pecahanUang[i]}`] = jumlahPecahan;
            kembalian = kembalian % pecahanUang[i];
        }
    }

    return hasil;
}

const pembayaran1 = 10000;
const pembayaran2 = 5000;
const pembayaran3 = 178000;

const belanja1 = 7500;
const belanja2 = 1100;
const belanja3 = 90500;

console.log(hitungKembalian(pembayaran1, belanja1));
console.log(hitungKembalian(pembayaran2, belanja2));
console.log(hitungKembalian(pembayaran3, belanja3));
