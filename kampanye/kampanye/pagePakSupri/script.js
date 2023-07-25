// Ambil referensi elemen-elemen yang dibutuhkan dari DOM
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const btnClose = document.getElementById("btnClose");
const coblosElement = document.getElementById("coblos");
const clickCountElement = document.getElementById("clickCount");
const loginPopup= document.getElementById("login-popup");
const loginOverlay = document.getElementById("login-overlay");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Fungsi untuk mengecek jumlah klik
function checkClickCount() {
    const maxClicks = 5;
    let clickCount = 6;

    return function() {
        clickCount--;

        // Update teks pada elemen "clickCount" dengan jumlah klik saat ini
        clickCountElement.textContent = `${clickCount}`;

        if (clickCount === 0) {
            // Tampilkan popup
            showLoginPopup();
            // Redirect ke halaman login setelah countdown selesai
            // window.location.href = "login-page.html"; // Ganti "login-page.html" dengan halaman login yang sesuai
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

function showLoginPopup() {
  loginOverlay.style.display = "flex";
  loginPopup.classList.remove("hidden");
}

// Fungsi untuk menyembunyikan popup
function hidePopup() {
  overlay.style.display = "none";
  popup.classList.add("hidden");
}

function loginHidePopup() {
  loginOverlay.style.display = "none";
  loginPopup.classList.add("hidden");
  window.location.href = "index.html";
}


function loginPage() {
      window.location.replace("alogin.html");
}

// Ketika halaman dimuat, panggil fungsi showPopup() untuk menampilkan popup
document.addEventListener("DOMContentLoaded", showPopup);

// Ketika tombol "Tutup" diklik, panggil fungsi hidePopup() untuk menyembunyikan popup
btnClose.addEventListener("click", hidePopup);

document.getElementById("login-button").addEventListener("click", loginPage);



