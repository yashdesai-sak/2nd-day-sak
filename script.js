const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function sayYes() {
  document.getElementById("finalTitle").innerText = "🎉 SHE SAID YES 🎉";
  document.getElementById("finalText").innerText =
    "This is the beginning of our forever ❤️💍";

  startConfetti();
}

let confettiPieces = [];

function startConfetti() {
  canvas.style.display = "block";

  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10 + 5,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
  }

  requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.y += p.d;
    if (p.y > canvas.height) p.y = -10;
  });

  requestAnimationFrame(updateConfetti);
}
