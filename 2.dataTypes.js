// Aktifkan Strict Mode
"use strict";

console.log("--- Demo Data Types ---");

// 1. Tipe Data: String (Teks)
let namaLengkap = "Alice Smith";
let salam = "Selamat Pagi!";
let angkaSebagaiTeks = "123"; // Ini teks, bukan angka!

console.log("\n--- Tipe Data: String ---");
console.log(
  "Variabel namaLengkap:",
  namaLengkap,
  "| Tipe:",
  typeof namaLengkap
);
console.log("Variabel salam:", salam, "| Tipe:", typeof salam);
console.log(
  "Variabel angkaSebagaiTeks:",
  angkaSebagaiTeks,
  "| Tipe:",
  typeof angkaSebagaiTeks
);

// 2. Tipe Data: Number (Angka)
let usia = 30;
let hargaProduk = 19.99;
let jumlahSiswa = 500;

console.log("\n--- Tipe Data: Number ---");
console.log("Variabel usia:", usia, "| Tipe:", typeof usia);
console.log(
  "Variabel hargaProduk:",
  hargaProduk,
  "| Tipe:",
  typeof hargaProduk
);
console.log(
  "Variabel jumlahSiswa:",
  jumlahSiswa,
  "| Tipe:",
  typeof jumlahSiswa
);

// Kita bisa melakukan operasi matematika pada Number
let total = usia + hargaProduk;
console.log(
  "Hasil penjumlahan (usia + hargaProduk):",
  total,
  "| Tipe:",
  typeof total
); // 30 + 19.99 = 49.99

// 3. Tipe Data: Boolean (Benar/Salah)
let isLogin = true; // Pengguna sudah login
let isDarkMode = false; // Mode gelap tidak aktif
let punyaSIM = true;

console.log("\n--- Tipe Data: Boolean ---");
console.log("Variabel isLogin:", isLogin, "| Tipe:", typeof isLogin);
console.log("Variabel isDarkMode:", isDarkMode, "| Tipe:", typeof isDarkMode);
console.log("Variabel punyaSIM:", punyaSIM, "| Tipe:", typeof punyaSIM);

// 4. Tipe Data: Undefined (Belum Terdefinisi)
let namaHewan; // Variabel dideklarasikan tapi belum diisi
let kotaAsal;

console.log("\n--- Tipe Data: Undefined ---");
console.log("Variabel namaHewan:", namaHewan, "| Tipe:", typeof namaHewan);
console.log("Variabel kotaAsal:", kotaAsal, "| Tipe:", typeof kotaAsal);

// 5. Tipe Data: Null (Kosong yang Disengaja)
let dataPelanggan = null; // Sengaja kita set kosong
let keranjangBelanja = null;

console.log("\n--- Tipe Data: Null ---");
console.log(
  "Variabel dataPelanggan:",
  dataPelanggan,
  "| Tipe:",
  typeof dataPelanggan
);
console.log(
  "Variabel keranjangBelanja:",
  keranjangBelanja,
  "| Tipe:",
  typeof keranjangBelanja
);

// *** Penting: typeof null akan menghasilkan 'object'. Ini adalah 'bug' lama di JavaScript
//     tapi kalian cukup tahu bahwa null adalah 'primitive type' dan artinya 'tidak ada nilai yang disengaja'.
//     Jangan terlalu dalam menjelaskan kenapa 'object' untuk pemula, cukup sampaikan sebagai catatan. ***

console.log("\n--- Demo Data Types Selesai ---");
