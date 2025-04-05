const words = ["ootta Pallu", "Mayilu", "En Thangoooo", "Nithu"];
let i = 0;
const meltingEl = document.getElementById("meltingWords");

function changeWord() {
  meltingEl.textContent = words[i];
  i = (i + 1) % words.length;
}
setInterval(changeWord, 1500);
changeWord();

const images = ["1.jpg", "4.jpg", "6.jpg", "7.jpg"];
let currentPhoto = 0;
const photoElement = document.getElementById("mainPhoto");
let musicStarted = false;

function changePhoto() {
  currentPhoto = (currentPhoto + 1) % images.length;
  photoElement.src = images[currentPhoto] + "?random=" + Math.random();

  if (!musicStarted) {
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {});
    musicStarted = true;
  }
}

function showPopup() {
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popupText");

  popup.style.display = "flex";
  popupText.textContent = "Waiting to get the surprise...";

  setTimeout(() => {
    popupText.textContent = "I love ammu 32 ⚙️🦤 Insta = pattunithu@2002";
  }, 3000);
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}
