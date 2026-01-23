// SnakeMenuJS.js

// Fade out loading screen once page fully loads
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.opacity = "1";

  setTimeout(() => {
    loadingScreen.style.transition = "opacity 1s ease";
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 1000);
  }, 2000); // logo stays visible for 2 seconds
});

// Menu button logic
document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playBtn");
  const shopBtn = document.getElementById("shopBtn");
  const snakesBtn = document.getElementById("snakesBtn");
  const settingsBtn = document.getElementById("settingsBtn");

  const playSection = document.getElementById("playSection");
  const shopSection = document.getElementById("shopSection");
  const snakesSection = document.getElementById("snakesSection");
  const settingsSection = document.getElementById("settingsSection");

  function hideAllSections() {
    playSection.classList.add("hidden");
    shopSection.classList.add("hidden");
    snakesSection.classList.add("hidden");
    settingsSection.classList.add("hidden");
  }

  playBtn.addEventListener("click", () => {
    hideAllSections();
    playSection.classList.remove("hidden");
  });

  shopBtn.addEventListener("click", () => {
    hideAllSections();
    shopSection.classList.remove("hidden");
  });

  snakesBtn.addEventListener("click", () => {
    hideAllSections();
    snakesSection.classList.remove("hidden");
  });

  settingsBtn.addEventListener("click", () => {
    hideAllSections();
    settingsSection.classList.remove("hidden");
  });
});
