const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
    const isEmoji = Math.random() < 0.4; // 40% chance de emoji

    particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        size: Math.random() * 20 + 15,
        speed: Math.random() * 2 + 1,
        opacity: Math.random(),
        type: isEmoji ? "emoji" : "heart"
    });
}

// coração desenhado
function drawHeart(x, y, size, opacity) {
    ctx.globalAlpha = opacity;
    ctx.fillStyle = "red";

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size, y - size, x - size * 2, y + size / 2, x, y + size * 2);
    ctx.bezierCurveTo(x + size * 2, y + size / 2, x + size, y - size, x, y);
    ctx.fill();

    ctx.globalAlpha = 1;
}

// emoji 🎉
function drawEmoji(x, y, size, opacity) {
    ctx.globalAlpha = opacity;
    ctx.font = `${size}px Arial`;
    ctx.fillText("🎉", x, y);
    ctx.globalAlpha = 1;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.1) {
        createParticle();
    }

    particles.forEach((p, index) => {
        p.y -= p.speed;

        if (p.type === "heart") {
            drawHeart(p.x, p.y, p.size, p.opacity);
        } else {
            drawEmoji(p.x, p.y, p.size, p.opacity);
        }

        if (p.y < -20) {
            particles.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});