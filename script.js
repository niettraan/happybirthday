// --- Lời chúc hiện dần ---
const messageText = `Chúc bé Thảo sinh nhật thật vui vẻ 🎉
\n
Luôn chu che, đáng yêu và xinh gái 💕
\n
Anh yêu em Mei Mei cuti nhiều lém 🌸`;

let idx = 0;
function typeMessage() {
    if (idx < messageText.length) {
        document.getElementById('message').innerHTML += messageText.charAt(idx);
        idx++;
        setTimeout(typeMessage, 60);
    }
}
typeMessage();

// --- Slideshow ---
let currentImg = 1;
let totalImg = 17; // Nếu có 10 ảnh: mei1 → mei10

function changeImage() {
    currentImg++;
    if (currentImg > totalImg) currentImg = 1;
    let img = document.getElementById("slideImg");
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = `images/mei${currentImg}.jpg`;
        img.style.opacity = 1;
    }, 500);
}
setInterval(changeImage, 2500);

// --- Trái tim bay ---
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";
    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

window.addEventListener("click", () => {
    const music = document.getElementById("music");
    music.muted = false;
    music.play().catch(err => console.log(err));
}, { once: true });

