var banyakAngkot = 10;
var angkotBeroprasi = 6;

for (var noAngkot = 1; noAngkot <= banyakAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroprasi) {
    console.log("Angkot No " + noAngkot + " Beroperasi Dengan baik");
  } else if (noAngkot > angkotBeroprasi && noAngkot != 8 && noAngkot != 9) {
    console.log("Angkot No " + noAngkot + " Tidak beroperasi");
  } else {
    console.log("Angkot No " + noAngkot + " lembur");
  }
}
