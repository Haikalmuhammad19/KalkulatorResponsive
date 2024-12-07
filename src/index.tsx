const tambah = (a: number, b: number) => a + b;
const kurang = (a: number, b: number) => a - b;
const kali = (a: number, b: number) => a * b;   // Fungsi perkalian
const bagi = (a: number, b: number) => b !== 0 ? a / b : 'Tidak bisa dibagi dengan 0';   // Fungsi pembagian

export { tambah, kurang, kali, bagi };
