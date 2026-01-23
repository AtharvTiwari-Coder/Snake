// SnakeMenuJS.js

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Grab all navigation buttons
  const playBtn = document.getElementById("playBtn");
  const shopBtn = document.getElementById("shopBtn");
  const snakesBtn = document.getElementById("snakesBtn");
  const settingsBtn = document.getElementById("settingsBtn");

  // Grab all sections
  const playSection = document.getElementById("playSection");
  const shopSection = document.getElementById("shopSection");
  const snakesSection = document.getElementById("snakesSection");
  const settingsSection = document.getElementById("settingsSection");

  // Utility: hide all sections
  function hideAllSections() {
    playSection.classList.add("hidden");
    shopSection.classList.add("hidden");
    snakesSection.classList.add("hidden");
    settingsSection.classList.add("hidden");
  }

  // Show Play section
  playBtn.addEventListener("click", () => {
    hideAllSections();
    playSection.classList.remove("hidden");
  });

  // Show Shop section
  shopBtn.addEventListener("click", () => {
    hideAllSections();
    shopSection.classList.remove("hidden");
  });

  // Show Snakes section
  snakesBtn.addEventListener("click", () => {
    hideAllSections();
    snakesSection.classList.remove("hidden");
  });

  // Show Settings section
  settingsBtn.addEventListener("click", () => {
    hideAllSections();
    settingsSection.classList.remove("hidden");
  });
});
