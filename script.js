window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  loading.style.opacity = "0";
  setTimeout(() => {
    loading.style.display = "none";
  }, 500);
});
// Musik kontrol
const music = document.querySelector("audio");
const controlBtn = document.getElementById("music-control");

if (controlBtn) {
  controlBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      controlBtn.textContent = "⏸️";
    } else {
      music.pause();
      controlBtn.textContent = "▶️";
    }
  });
}

// Efek bunga jatuh
function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 5000);
}

setInterval(createPetal, 500);
