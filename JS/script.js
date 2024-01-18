// script.js

function hitungLuas() {
    // Mengambil nilai sisi dari input
    var sisi = parseFloat(document.getElementById('sisi').value); 
    // Menghitung luas persegi
    var luas = sisi * sisi;
    // Menampilkan hasil luas
    document.getElementById('hasilLuas').innerText = "Luas: " + luas;
}
function hitungKeliling() {
    // Mengambil nilai sisi dari input
    var sisi = parseFloat(document.getElementById('sisi').value);
    // Menghitung keliling persegi
    var keliling = 4 * sisi;
    // Menampilkan hasil keliling
    document.getElementById('hasilKeliling').innerText = "Keliling: " + keliling;
}
