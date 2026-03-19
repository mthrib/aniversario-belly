const canvas = document.getElementById("bg-effect");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
    particles.push({
        x: Math.random() * canvas.width,
        y: -10,
        size: Math.random() * 3 + 1, // pequeno = leve
        speedY: Math.random() * 1 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random()
    });
}

function drawParticle(p) {
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = "white";

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // cria poucas partículas (não pesado)
    if (Math.random() < 0.2) {
        createParticle();
    }

    particles.forEach((p, index) => {
        p.y += p.speedY;
        p.x += p.speedX;

        drawParticle(p);

        // remove quando sai da tela
        if (p.y > canvas.height) {
            particles.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

animate();

// responsivo
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});