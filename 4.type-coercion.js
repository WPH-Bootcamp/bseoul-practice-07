// Aktifkan Strict Mode
"use strict";

console.log("--- Demo Type Conversions ---");

// --- Bagian 1: Konversi Eksplisit ---

console.log("\n--- Konversi ke Number (menggunakan Number()) ---");
let inputUsia = "30";
let inputHarga = "15.75";
let teksTidakValid = "hello";

let usiaAngka = Number(inputUsia);
let hargaAngka = Number(inputHarga);
let hasilNaN = Number(teksTidakValid);

console.log(
  "inputUsia (String):",
  inputUsia,
  "| Setelah Number():",
  usiaAngka,
  "| Tipe:",
  typeof usiaAngka
);
console.log(
  "inputHarga (String):",
  inputHarga,
  "| Setelah Number():",
  hargaAngka,
  "| Tipe:",
  typeof hargaAngka
);
console.log(
  "teksTidakValid (String):",
  teksTidakValid,
  "| Setelah Number():",
  hasilNaN,
  "| Tipe:",
  typeof hasilNaN
); // NaN adalah Not a Number

console.log("\n--- Konversi ke String (menggunakan String()) ---");
let angkaTahun = 2024;
let booleanAktif = true;
let nilaiKosong = null;

let tahunString = String(angkaTahun);
let aktifString = String(booleanAktif);
let kosongString = String(nilaiKosong);

console.log(
  "angkaTahun (Number):",
  angkaTahun,
  "| Setelah String():",
  tahunString,
  "| Tipe:",
  typeof tahunString
);
console.log(
  "booleanAktif (Boolean):",
  booleanAktif,
  "| Setelah String():",
  aktifString,
  "| Tipe:",
  typeof aktifString
);
console.log(
  "nilaiKosong (Null):",
  nilaiKosong,
  "| Setelah String():",
  kosongString,
  "| Tipe:",
  typeof kosongString
);

console.log("\n--- Konversi ke Boolean (menggunakan Boolean()) ---");
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(100):", Boolean(100)); // true
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean('Halo'):", Boolean("Halo")); // true
console.log("Boolean(' '):", Boolean(" ")); // true (ada spasi)
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN)); // false

// --- Bagian 2: Konversi Implisit (Type Coercion) ---

console.log("\n--- Konversi Implisit (Type Coercion) ---");

// Operator Penjumlahan (+)
let num1 = 10;
let str2 = "5";
let hasilPlus = num1 + str2; // num1 diubah jadi string "10", lalu digabungkan
console.log(
  "10 (number) + '5' (string):",
  hasilPlus,
  "| Tipe:",
  typeof hasilPlus
); // "105" (string)

// Operator Pengurangan (-), Perkalian (*), Pembagian (/)
let num3 = 20;
let str4 = "4";
let hasilMinus = num3 - str4; // str4 diubah jadi number 4
let hasilKali = num3 * str4; // str4 diubah jadi number 4
let hasilBagi = num3 / str4; // str4 diubah jadi number 4

console.log(
  "20 (number) - '4' (string):",
  hasilMinus,
  "| Tipe:",
  typeof hasilMinus
); // 16 (number)
console.log(
  "20 (number) * '4' (string):",
  hasilKali,
  "| Tipe:",
  typeof hasilKali
); // 80 (number)
console.log(
  "20 (number) / '4' (string):",
  hasilBagi,
  "| Tipe:",
  typeof hasilBagi
); // 5 (number)

console.log("\n--- Demo Type Conversions Selesai ---");
