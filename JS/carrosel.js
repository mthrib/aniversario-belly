const track = document.querySelector('.carousel-track');
let images = document.querySelectorAll('.carousel img');

let index = 0;
let isDragging = false;
let startX;
let currentTranslate = 0;
let prevTranslate = 0;

// 🔥 DUPLICA imagens (truque do infinito)
track.innerHTML += track.innerHTML;

images = document.querySelectorAll('.carousel img');

function updatePosition() {
    track.style.transform = `translateX(${-index * 100}%)`;
}

// AUTO SLIDE
setInterval(() => {
    index++;
    updatePosition();

    // reset invisível (loop infinito)
    if (index >= images.length / 2) {
        setTimeout(() => {
            track.style.transition = "none";
            index = 0;
            updatePosition();

            setTimeout(() => {
                track.style.transition = "transform 0.5s ease";
            });
        }, 500);
    }
}, 3000);

// 🖱️ DRAG (mouse + touch)
track.addEventListener('mousedown', startDrag);
track.addEventListener('touchstart', startDrag);

track.addEventListener('mousemove', drag);
track.addEventListener('touchmove', drag);

track.addEventListener('mouseup', endDrag);
track.addEventListener('mouseleave', endDrag);
track.addEventListener('touchend', endDrag);

function startDrag(e) {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function drag(e) {
    if (!isDragging) return;

    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const walk = x - startX;

    track.style.transform = `translateX(${ -index * 100 + walk / 5 }%)`;
}

function endDrag(e) {
    if (!isDragging) return;
    isDragging = false;

    const x = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].clientX;
    const diff = x - startX;

    if (diff > 50) {
        index--;
    } else if (diff < -50) {
        index++;
    }

    track.style.transition = "transform 0.5s ease";
    updatePosition();
}
