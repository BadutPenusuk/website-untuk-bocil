document.addEventListener("DOMContentLoaded", function () {
    alert("Semoga Makin Cantik TIAP HARI💖 Ga bole sering2 minum es dan makan seblak! 😊");
 
});
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    const size = Math.random() * 20 + 10; // Ukuran acak
    heart.style.fontSize = `${size}px`;

    heart.style.left = Math.random() * 100 + "vw"; // Posisi acak
    heart.style.animationDuration = Math.random() * 5 + 5 + "s"; // Perlambat durasi jatuh (5s - 10s)

    heart.style.position = "fixed"; // Tetap di layar
    heart.style.zIndex = "-1"; // Pastikan hati ada di belakang teks

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000); // Hapus setelah 10 detik untuk performa lebih baik
}

// Buat hati setiap 500ms agar tidak terlalu padat
setInterval(createHeart, 500);

