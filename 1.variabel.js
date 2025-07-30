// Aktifkan Strict Mode untuk kebiasaan koding yang baik
"use strict";

console.log("--- Demo Variabel dengan let dan const ---");

// --- Bagian 1: Menggunakan 'let' (Kotak yang Isinya Bisa Berubah) ---
console.log("\n--- Menggunakan 'let' ---");

let namaPengguna = "Alice"; // Mendeklarasikan dan mengisi variabel namaPengguna
console.log("Nama pengguna awal:", namaPengguna); // Alice

// Kita bisa mengubah nilai variabel 'let'
namaPengguna = "Bob"; // Mengubah nilai namaPengguna
console.log("Nama pengguna setelah diubah:", namaPengguna); // Bob

let skorGame = 0;
console.log("Skor awal:", skorGame); // 0
skorGame = skorGame + 100; // Menambah skor
console.log("Skor setelah main:", skorGame); // 100

// Kita juga bisa mendeklarasikan 'let' tanpa nilai awal, tapi tidak disarankan
// karena nilainya akan menjadi 'undefined' (tidak terdefinisi)
let jumlahPesanan;
console.log("Jumlah pesanan (belum diisi):", jumlahPesanan); // undefined
jumlahPesanan = 5;
console.log("Jumlah pesanan (setelah diisi):", jumlahPesanan); // 5

// --- Bagian 2: Menggunakan 'const' (Kotak yang Isinya Tidak Bisa Berubah) ---
console.log("\n--- Menggunakan 'const' ---");

const tanggalLahir = "10 Januari 2000"; // Mendeklarasikan dan mengisi variabel tanggalLahir
console.log("Tanggal lahir:", tanggalLahir); // 10 Januari 2000

// Coba ubah nilai variabel 'const' - INI AKAN MENYEBABKAN ERROR!
// tanggalLahir = "15 Februari 2001"; // Uncomment baris ini untuk melihat error di konsol
// console.log("Tanggal lahir setelah diubah (akan error):", tanggalLahir);

const PI = 3.14159; // Konstanta matematika
console.log("Nilai PI:", PI); // 3.14159

// 'const' harus langsung diisi saat dideklarasikan
// const kota; // Uncomment baris ini untuk melihat error (Missing initializer in const declaration)
// kota = "Bandung";

// --- Bagian 3: Aturan Penamaan Variabel yang Baik ---
console.log("\n--- Aturan Penamaan Variabel ---");

// Contoh nama variabel yang benar:
let namaDepan = "Cahya";
let _usia = 25;
let $hargaBarang = 5000;
let totalHargaPembelian = 12000; // CamelCase: huruf pertama kata kedua dan seterusnya kapital
console.log(namaDepan, _usia, $hargaBarang, totalHargaPembelian);

// Contoh nama variabel yang salah (akan error jika di-uncomment):
// let 1nama = "Error"; // Tidak boleh diawali angka
// let nama-belakang = "Error"; // Tidak boleh ada hyphen/tanda hubung
// let let = "Error"; // Tidak boleh pakai kata kunci JavaScript

console.log("\n--- Demo Variabel Selesai ---");
