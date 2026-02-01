const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const heartsContainer = document.querySelector(".hearts");

let escaped = false;

/* 💌 OPEN HEART */
openBtn.addEventListener("click", () => {
    message.classList.remove("hidden");
    openBtn.style.display = "none";
});

/* 💖 YES CLICK */
yesBtn.addEventListener("click", () => {
    response.innerHTML = `
        🐼💖 YESSSSS 💖🐧<br><br>
        My Panda chose her Penguin 😍<br>
        4 years together and still madly in love 💕<br><br>
        Forever yours,<br>
        your Penguin 🐧
    `;
    createKisses();
});

/* ❌ NO BUTTON PROXIMITY DETECTION */
document.addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const distance = Math.hypot(e.clientX - cx, e.clientY - cy);

    // ~3–4 cm
    if (distance < 140) {
        escapeNoButton();
    }
});

/* 🏃 NO BUTTON ESCAPES OUTSIDE */
function escapeNoButton() {
    if (!escaped) {
        escaped = true;

        // move to body so it can escape freely
        document.body.appendChild(noBtn);
        noBtn.style.position = "fixed";
    }

    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noBtn.classList.add("shake");
    setTimeout(() => noBtn.classList.remove("shake"), 300);
}

/* 💋 FLOATING KISSES */
function createKisses() {
    for (let i = 0; i < 20; i++) {
        const kiss = document.createElement("div");
        kiss.className = "kiss";
        kiss.textContent = "💋";
        kiss.style.left = Math.random() * 100 + "vw";
        kiss.style.animationDuration = Math.random() * 3 + 3 + "s";
        document.body.appendChild(kiss);

        setTimeout(() => kiss.remove(), 6000);
    }
}

/* 💕 FLOATING HEARTS */
const emojis = ["❤️","💖","💕","💘","💝","😍","🥰"];
for (let i = 0; i < 120; i++) {
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.position = "absolute";
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";
    span.style.fontSize = Math.random() * 20 + 20 + "px";
    span.style.opacity = Math.random();
    span.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;

    heartsContainer.appendChild(span);
}
