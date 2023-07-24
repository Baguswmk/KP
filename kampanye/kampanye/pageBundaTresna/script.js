// Ambil referensi elemen-elemen yang dibutuhkan dari DOM
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const btnClose = document.getElementById("btnClose");
const coblosElement = document.getElementById("coblos");
const clickCountElement = document.getElementById("clickCount");

// Fungsi untuk mengecek jumlah klik
function checkClickCount() {
    const maxClicks = 6;
    let clickCount = 7;

    return function() {
        clickCount--;

        // Update teks pada elemen "clickCount" dengan jumlah klik saat ini
        clickCountElement.textContent = `${clickCount}`;

        if (clickCount === 0) {
            // Redirect ke halaman login setelah countdown selesai
            window.location.href = "login-page.html"; // Ganti "login-page.html" dengan halaman login yang sesuai
        }
    };
}

// Tambahkan event listener untuk mengecek jumlah klik pada elemen "coblos"
coblosElement.addEventListener("click", checkClickCount());
// Fungsi untuk menampilkan popup
function showPopup() {
  overlay.style.display = "flex";
  popup.classList.remove("hidden");
}

// Fungsi untuk menyembunyikan popup
function hidePopup() {
  overlay.style.display = "none";
  popup.classList.add("hidden");
}

// Ketika halaman dimuat, panggil fungsi showPopup() untuk menampilkan popup
document.addEventListener("DOMContentLoaded", showPopup);

// Ketika tombol "Tutup" diklik, panggil fungsi hidePopup() untuk menyembunyikan popup
btnClose.addEventListener("click", hidePopup);


