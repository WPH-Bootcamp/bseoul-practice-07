// Aktifkan Strict Mode
"use strict";

console.log("--- Demo If/Else Statements ---");

// --- Contoh 1: Hanya If ---
console.log("\n--- Contoh 1: Hanya If ---");
let suhu = 28;

if (suhu > 25) {
  console.log("Suhu saat ini panas!");
}

let sudahMakan = true;
if (sudahMakan) {
  // Jika sudahMakan bernilai true
  console.log("Saya sudah kenyang.");
}

// --- Contoh 2: If dan Else ---
console.log("\n--- Contoh 2: If dan Else ---");
let umur = 17;
let batasUmurFilm = 18;

if (umur >= batasUmurFilm) {
  console.log("Anda boleh menonton film ini.");
} else {
  console.log("Maaf, Anda belum cukup umur untuk menonton film ini.");
}

let saldo = 50000;
let hargaBarang = 75000;

if (saldo >= hargaBarang) {
  console.log("Pembelian berhasil!");
  saldo = saldo - hargaBarang; // Mengurangi saldo
  console.log("Sisa saldo Anda: Rp" + saldo);
} else {
  console.log("Saldo tidak cukup untuk membeli barang ini.");
  console.log("Anda butuh Rp" + (hargaBarang - saldo) + " lagi.");
}

// --- Contoh 3: If, Else If, Else (Multiple Conditions) ---
console.log("\n--- Contoh 3: If, Else If, Else ---");
let nilaiUjian = 75;

if (nilaiUjian >= 90) {
  console.log("Nilai Anda A. Sangat bagus!");
} else if (nilaiUjian >= 80) {
  // Jika tidak 90 ke atas, cek apakah 80 ke atas
  console.log("Nilai Anda B. Bagus!");
} else if (nilaiUjian >= 70) {
  // Jika tidak 80 ke atas, cek apakah 70 ke atas
  console.log("Nilai Anda C. Cukup baik!");
} else {
  // Jika semua kondisi di atas false
  console.log("Nilai Anda D. Perlu belajar lebih giat.");
}

// Contoh lain dengan string
let warnaLampu = "kuning";

if (warnaLampu === "merah") {
  console.log("Berhenti!");
} else if (warnaLampu === "kuning") {
  console.log("Hati-hati, bersiap jalan atau berhenti.");
} else if (warnaLampu === "hijau") {
  console.log("Jalan!");
} else {
  console.log("Lampu tidak dikenal.");
}

console.log("\n--- Demo If/Else Statements Selesai ---");
