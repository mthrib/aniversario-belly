const music = document.getElementById("music");
const btn = document.querySelector(".music-btn");

// volume baixo
music.volume = 0.2;

function toggleMusic() {
    if (music.paused) {
        music.play();
        btn.classList.add("playing");
        btn.innerHTML = "⏸️ Pausar música";
    } else {
        music.pause();
        btn.classList.remove("playing");
        btn.innerHTML = "🎵 Tocar música";
    }
}