// Aktifkan Strict Mode
"use strict";

console.log("--- Demo Basic Math Operators ---");

// --- Bagian 1: Operasi Dasar ---

let angkaA = 10;
let angkaB = 3;

console.log("\n--- Operasi Dasar ---");
console.log("Angka A:", angkaA, "| Angka B:", angkaB);

// Penjumlahan (+)
let hasilTambah = angkaA + angkaB;
console.log("Penjumlahan (A + B):", hasilTambah); // 10 + 3 = 13

// Pengurangan (-)
let hasilKurang = angkaA - angkaB;
console.log("Pengurangan (A - B):", hasilKurang); // 10 - 3 = 7

// Perkalian (*)
let hasilKali = angkaA * angkaB;
console.log("Perkalian (A * B):", hasilKali); // 10 * 3 = 30

// Pembagian (/)
let hasilBagi = angkaA / angkaB;
console.log("Pembagian (A / B):", hasilBagi); // 10 / 3 = 3.3333...

// Sisa Bagi (%)
let hasilModulus = angkaA % angkaB;
console.log("Sisa Bagi (A % B):", hasilModulus); // 10 % 3 = 1

// Pangkat (**)
let hasilPangkat = angkaB ** 2; // 3 pangkat 2
console.log("Pangkat (B ** 2):", hasilPangkat); // 3 * 3 = 9

// --- Bagian 2: Kombinasi dan Prioritas Operator ---

console.log("\n--- Kombinasi dan Prioritas Operator ---");

let total = (5 + 3) * 2; // (8) * 2 = 16
console.log("(5 + 3) * 2 =", total); // Output: 16

let diskon = 100 / 2 + 5; // 50 + 5 = 55 (Pembagian duluan)
console.log("100 / 2 + 5 =", diskon); // Output: 55

let kompleks = 2 * 4 ** 2 + 1; // 2 * 16 + 1 = 32 + 1 = 33 (Pangkat duluan, lalu kali, lalu tambah)
console.log("2 * 4 ** 2 + 1 =", kompleks); // Output: 33

// --- Bagian 3: Contoh dengan Tipe Data String (Type Coercion) ---

console.log("\n--- Perhatian: Type Coercion dengan Operator ---");

let angkaStr = "5";
let num = 10;

// Operator + akan menggabungkan jika ada String
let gabungan = num + angkaStr;
console.log("10 (num) + '5' (str) =", gabungan, "| Tipe:", typeof gabungan); // "105", string

// Operator -, *, /, % akan mencoba mengubah String ke Number
let hasilKurangStr = num - angkaStr;
console.log(
  "10 (num) - '5' (str) =",
  hasilKurangStr,
  "| Tipe:",
  typeof hasilKurangStr
); // 5, number

let hasilKaliStr = num * angkaStr;
console.log(
  "10 (num) * '5' (str) =",
  hasilKaliStr,
  "| Tipe:",
  typeof hasilKaliStr
); // 50, number

// Contoh Pembagian dengan nol
console.log("10 / 0 =", 10 / 0); // Infinity
console.log("0 / 0 =", 0 / 0); // NaN (Not a Number)

console.log("\n--- Demo Basic Math Operators Selesai ---");
