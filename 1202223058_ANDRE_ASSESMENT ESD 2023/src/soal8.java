import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class soal8 {

    static class Produk {
        int id;
        String nama;
        String kategori;
        int harga;

        public Produk(int id, String nama, String kategori, int harga) {
            this.id = id;
            this.nama = nama;
            this.kategori = kategori;
            this.harga = harga;
        }
    }

    static class Pelanggan {
        int id;
        String nama;
        List<String> minat;
        List<String> beli;

        public Pelanggan(int id, String nama, List<String> minat, List<String> beli) {
            this.id = id;
            this.nama = nama;
            this.minat = minat;
            this.beli = beli;
        }
    }

    static List<Produk> produkList = new ArrayList<>();
    static List<Pelanggan> pelangganList = new ArrayList<>();

    public static void main(String[] args) {
        inisialisasiData();

        Scanner scanner = new Scanner(System.in);
        System.out.print("Masukkan nama pelanggan: ");
        String namaPelanggan = scanner.nextLine();

        Pelanggan pelanggan = cariPelanggan(namaPelanggan);

        if (pelanggan != null) {
            List<String> rekomendasi = rekomendasiProduk(pelanggan.minat);
            System.out.println("Rekomendasi produk untuk " + pelanggan.nama + ": " + rekomendasi);
        } else {
            System.out.println("Pelanggan dengan nama " + namaPelanggan + " tidak ditemukan.");
        }

        scanner.close();
    }

    static int hitungSkorMinat(Produk produk, List<String> minat) {
        int skor = 0;
        for (String s : minat) {
            if (produk.kategori.equals(s)) {
                skor++;
            }
        }
        return skor;
    }

    static List<String> rekomendasiProduk(List<String> minat) {
        List<String> rekomendasi = new ArrayList<>();
        for (Produk produk : produkList) {
            int skor = hitungSkorMinat(produk, minat);
            if (skor > 0) {
                rekomendasi.add(produk.nama);
            }
        }
        return rekomendasi;
    }

    static void inisialisasiData() {
        produkList.add(new Produk(1, "TV", "elektronik", 1000));
        produkList.add(new Produk(2, "headphone", "elektronik", 200));
        produkList.add(new Produk(3, "baju", "fashion", 50));
        produkList.add(new Produk(4, "gitar", "musik", 300));
        produkList.add(new Produk(5, "sepatu", "olahraga", 80));
        produkList.add(new Produk(6, "kamera", "elektronik", 600));

        List<String> minatRina = new ArrayList<>();
        minatRina.add("elektronik");
        minatRina.add("musik");
        List<String> beliRina = new ArrayList<>();
        beliRina.add("TV");
        beliRina.add("headphone");

        List<String> minatBudi = new ArrayList<>();
        minatBudi.add("fashion");
        minatBudi.add("musik");
        List<String> beliBudi = new ArrayList<>();
        beliBudi.add("baju");
        beliBudi.add("gitar");

        List<String> minatHartono = new ArrayList<>();
        minatHartono.add("olahraga");
        minatHartono.add("elektronik");
        List<String> beliHartono = new ArrayList<>();
        beliHartono.add("sepatu");
        beliHartono.add("kamera");

        pelangganList.add(new Pelanggan(1, "Rina", minatRina, beliRina));
        pelangganList.add(new Pelanggan(2, "Budi", minatBudi, beliBudi));
        pelangganList.add(new Pelanggan(3, "Hartono", minatHartono, beliHartono));
    }

    static Pelanggan cariPelanggan(String namaPelanggan) {
        for (Pelanggan p : pelangganList) {
            if (p.nama.equalsIgnoreCase(namaPelanggan)) {
                return p;
            }
        }
        return null;
    }
}
