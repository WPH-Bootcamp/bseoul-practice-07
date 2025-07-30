// Aktifkan Strict Mode
"use strict";

console.log("--- Demo Comparisons ---");

let angkaX = 10;
let angkaY = 5;
let teksAngkaX = "10";
let teksY = "5";
let teksZ = "Hello";

console.log(
  "\n--- Sama Dengan (==) dan Tidak Sama Dengan (!=) (Loose Equality) ---"
);
console.log("angkaX (10) == teksAngkaX ('10'):", angkaX == teksAngkaX); // true (tipe diubah)
console.log("angkaX (10) != teksAngkaX ('10'):", angkaX != teksAngkaX); // false (tipe diubah)
console.log("angkaY (5) == teksY ('5'):", angkaY == teksY); // true
console.log("null == undefined:", null == undefined); // true (ini kasus khusus di JS)
console.log("0 == false:", 0 == false); // true
console.log("'' == false:", "" == false); // true

console.log(
  "\n--- Sama Dengan (===) dan Tidak Sama Dengan (!==) (Strict Equality) ---"
);
console.log("angkaX (10) === teksAngkaX ('10'):", angkaX === teksAngkaX); // false (tipe beda)
console.log("angkaX (10) !== teksAngkaX ('10'):", angkaX !== teksAngkaX); // true (tipe beda)
console.log("angkaY (5) === teksY ('5'):", angkaY === teksY); // false
console.log("null === undefined:", null === undefined); // false
console.log("0 === false:", 0 === false); // false
console.log("'' === false:", "" === false); // false
console.log("angkaX (10) === 10:", angkaX === 10); // true

console.log("\n--- Perbandingan Lebih Besar / Lebih Kecil (Angka) ---");
console.log("angkaX (10) > angkaY (5):", angkaX > angkaY); // true
console.log("angkaY (5) < angkaX (10):", angkaY < angkaX); // true
console.log("angkaX (10) >= 10:", angkaX >= 10); // true
console.log("angkaY (5) <= 5:", angkaY <= 5); // true
console.log("angkaY (5) >= angkaX (10):", angkaY >= angkaX); // false

console.log("\n--- Perbandingan String ---");
console.log("'Apel' > 'Jeruk':", "Apel" > "Jeruk"); // false (karena J setelah A)
console.log("'Banana' < 'Apple':", "Banana" < "Apple"); // false (karena A sebelum B)
console.log("'2' > '10':", "2" > "10"); // true (secara leksikografis, '2' lebih besar dari '1')
// PENTING: ini kenapa harus ubah ke Number dulu kalau mau banding angka!
console.log("Number('2') > Number('10'):", Number("2") > Number("10")); // false (Ini yang benar untuk angka!)

console.log("'Zebra' > 'apple':", "Zebra" > "apple"); // false (karena huruf kecil 'a' > huruf kapital 'Z')
// ASCII 'a' = 97, 'Z' = 90. Angka yang lebih besar artinya 'lebih besar'.
console.log("'A' === 'a':", "A" === "a"); // false (case-sensitive)

console.log("\n--- Demo Comparisons Selesai ---");
