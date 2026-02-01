const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const heartsContainer = document.querySelector(".hearts");
let escaped = false;

openBtn.addEventListener("click", () => {
    message.classList.remove("hidden");
    openBtn.style.display = "none";
});

yesBtn.addEventListener("click", () => {
    response.innerHTML = `
        🐼💖 YESSSSS 💖🐧<br><br>
        My Panda chose her Penguin 😍<br>
        4 years together and still madly in love 💕<br><br>
        Forever yours,<br>
        your Penguin 🐧
    `;
    createKisses();
    playMiniAnimation(); 
});

document.addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const distance = Math.hypot(e.clientX - cx, e.clientY - cy);
    if (distance < 140) {
        escapeNoButton();
    }
});

function escapeNoButton() {
    if (!escaped) {
        escaped = true;
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
function playMiniAnimation() {
    const canvas = document.getElementById("miniAnimation");
    canvas.classList.remove("hidden");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    let groundY = canvas.height * 0.8; 

    const boy = { x: 50, y: groundY, width: 40, height: 80 };
    const girl = { x: canvas.width - 150, y: groundY, width: 40, height: 90 };
    const plane = { x: 200, y: groundY - 100, width: 120, height: 60 };

    let state = 0;
    let startTime = null;

    const clouds = [];
    for (let i = 0; i < 7; i++) {
        clouds.push({ x: Math.random() * canvas.width, y: Math.random() * groundY * 0.5 });
    }

    function drawGround() {
        ctx.fillStyle = "#228B22";
        ctx.fillRect(0, groundY, canvas.width, canvas.height - groundY);
    }

   function drawBoy(x, y) {
    // Body (chubby penguin)
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.ellipse(x + 20, y - 40, 18, 35, 0, 0, Math.PI * 2);
    ctx.fill();

    // White belly
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.ellipse(x + 20, y - 35, 12, 22, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head (big and round)
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(x + 20, y - 75, 18, 0, Math.PI * 2);
    ctx.fill();

    // Face white
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(x + 20, y - 75, 12, 0, Math.PI * 2);
    ctx.fill();

    // Beak (cute, small)
    ctx.fillStyle = "#FFA500";
    ctx.beginPath();
    ctx.moveTo(x + 20, y - 73);
    ctx.lineTo(x + 26, y - 70);
    ctx.lineTo(x + 20, y - 68);
    ctx.closePath();
    ctx.fill();

    // Eyes (big & sparkly)
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(x + 14, y - 78, 3, 0, Math.PI * 2);
    ctx.arc(x + 26, y - 78, 3, 0, Math.PI * 2);
    ctx.fill();

    // Eye sparkle
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(x + 14, y - 78, 1, 0, Math.PI * 2);
    ctx.arc(x + 26, y - 78, 1, 0, Math.PI * 2);
    ctx.fill();

    // Blush cheeks
    ctx.fillStyle = "#f497b0";
    ctx.beginPath();
    ctx.arc(x + 10, y - 72, 3, 0, Math.PI * 2);
    ctx.arc(x + 30, y - 72, 3, 0, Math.PI * 2);
    ctx.fill();

    // Feet (small and rounded)
    ctx.fillStyle = "#FFA500";
    ctx.beginPath();
    ctx.moveTo(x + 12, y);
    ctx.lineTo(x + 16, y + 8);
    ctx.lineTo(x + 8, y + 8);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + 28, y);
    ctx.lineTo(x + 32, y + 8);
    ctx.lineTo(x + 24, y + 8);
    ctx.closePath();
    ctx.fill();

    // Wings (chubby, cute)
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.ellipse(x + 5, y - 45, 5, 12, Math.PI / 4, 0, Math.PI * 2);
    ctx.ellipse(x + 35, y - 45, 5, 12, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
}


function drawGirl(x, y) {
    // Body (chubby and cute)
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.ellipse(x + 20, y - 40, 18, 35, 0, 0, Math.PI * 2);
    ctx.fill();

    // White belly
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.ellipse(x + 20, y - 35, 10, 22, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head (big and round)
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(x + 20, y - 75, 18, 0, Math.PI * 2);
    ctx.fill();

    // Face white
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(x + 20, y - 75, 12, 0, Math.PI * 2);
    ctx.fill();

    // Eyes patches (slightly bigger)
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.ellipse(x + 13, y - 75, 5, 7, 0, 0, Math.PI * 2);
    ctx.ellipse(x + 27, y - 75, 5, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eyes (big & sparkly)
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(x + 13, y - 75, 3, 0, Math.PI * 2);
    ctx.arc(x + 27, y - 75, 3, 0, Math.PI * 2);
    ctx.fill();

    // Eye sparkle
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(x + 13, y - 75, 1, 0, Math.PI * 2);
    ctx.arc(x + 27, y - 75, 1, 0, Math.PI * 2);
    ctx.fill();

    // Nose (tiny and cute)
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(x + 20, y - 70, 2, 0, Math.PI * 2);
    ctx.fill();

    // Blush cheeks
    ctx.fillStyle = "#f497b0";
    ctx.beginPath();
    ctx.arc(x + 10, y - 70, 3, 0, Math.PI * 2);
    ctx.arc(x + 30, y - 70, 3, 0, Math.PI * 2);
    ctx.fill();

    // Feet (small and chubby)
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(x + 12, y);
    ctx.lineTo(x + 16, y + 10);
    ctx.lineTo(x + 8, y + 10);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + 28, y);
    ctx.lineTo(x + 32, y + 10);
    ctx.lineTo(x + 24, y + 10);
    ctx.closePath();
    ctx.fill();

    // Arms (cute tiny arms hugging the belly)
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.ellipse(x + 5, y - 50, 5, 12, Math.PI / 4, 0, Math.PI * 2);
    ctx.ellipse(x + 35, y - 50, 5, 12, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
}


function drawPlane(x, y) {
    // Main body
    ctx.fillStyle = "#FFDD55"; // yellow cartoon body
    ctx.strokeStyle = "#FFA500"; 
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(x + plane.width / 2, y + plane.height / 2, plane.width / 2, plane.height / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#FFAA33";
    ctx.beginPath();
    ctx.moveTo(x + plane.width * 0.2, y + plane.height / 2);
    ctx.lineTo(x + plane.width * 0.5, y - plane.height * 0.3);
    ctx.lineTo(x + plane.width * 0.8, y + plane.height / 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + plane.width * 0.2, y + plane.height / 2);
    ctx.lineTo(x + plane.width * 0.5, y + plane.height * 1.3);
    ctx.lineTo(x + plane.width * 0.8, y + plane.height / 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#FFAA33";
    ctx.beginPath();
    ctx.moveTo(x + 5, y + plane.height / 2);
    ctx.lineTo(x - 15, y + plane.height / 2 - 15);
    ctx.lineTo(x - 15, y + plane.height / 2 + 15);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#555";
    ctx.fillRect(x + plane.width - 5, y + plane.height / 2 - 3, 10, 6);
}

    function drawCloud(c) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(c.x, c.y, 20, 0, Math.PI * 2);
        ctx.arc(c.x + 25, c.y + 10, 20, 0, Math.PI * 2);
        ctx.arc(c.x - 25, c.y + 10, 20, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawHeart(x, y) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y - 10, x - 15, y - 10, x - 15, y);
        ctx.bezierCurveTo(x - 15, y + 10, x, y + 15, x, y + 25);
        ctx.bezierCurveTo(x, y + 15, x + 15, y + 10, x + 15, y);
        ctx.bezierCurveTo(x + 15, y - 10, x, y - 10, x, y);
        ctx.fill();
    }
    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#87CEEB";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        clouds.forEach(c => {
            c.x -= 0.5;
            if (c.x < -50) c.x = canvas.width + 50;
            drawCloud(c);
        });
        drawGround();
        switch(state) {
            case 0: 
                boy.x = 50 + Math.min(plane.x - 50, (plane.x - 50) * (elapsed / 3));
                drawBoy(boy.x, boy.y);
                drawPlane(plane.x, plane.y);
                if (elapsed > 3) { state++; startTime = timestamp; }
                break;
            case 1: 
                drawPlane(plane.x, plane.y);
                if (elapsed > 2) { state++; startTime = timestamp; }
                break;
            case 2: 
                plane.x = 200 + 400 * Math.min(1, elapsed / 2);
                plane.y = groundY - 100 - 200 * Math.min(1, elapsed / 2);
                drawPlane(plane.x, plane.y);
                if (elapsed > 2) { state++; startTime = timestamp; }
                break;
            case 3: 
                plane.x = 600 + 400 * Math.min(1, elapsed / 4);
                plane.y = groundY - 300 + 50 * Math.sin(elapsed * 3);
                drawPlane(plane.x, plane.y);
                if (elapsed > 4) { state++; startTime = timestamp; }
                break;
            case 4:
                plane.y = groundY - plane.height;
                drawPlane(plane.x, plane.y);
                if (elapsed > 3) { state++; startTime = timestamp; }
                break;
            case 5: 
                boy.x = plane.x + (girl.x - plane.x) * Math.min(1, elapsed / 3);
                drawBoy(boy.x, boy.y);
                drawGirl(girl.x, girl.y);
                drawPlane(plane.x, plane.y);
                if (elapsed > 3) { state++; startTime = timestamp; }
                break;
            case 6:
                drawBoy(boy.x, boy.y);
                drawGirl(girl.x, girl.y);
                drawPlane(plane.x, plane.y);
                if (Math.floor(elapsed * 4) % 2 === 0) drawHeart(boy.x + 20, boy.y - 60);
                if (elapsed > 3) { canvas.classList.add("hidden"); return; }
                break;
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        groundY = canvas.height * 0.8;
        boy.y = groundY;
        girl.y = groundY;
    });
}

