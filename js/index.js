const toggler_mode = document.getElementById("mode");
const ico_sun = document.getElementById("ico_sun");
const ico_moon = document.getElementById("ico_moon");

function updateTheme(isDark) {
  toggler_mode.checked = isDark;
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function setDarkMode() {
  updateTheme(true);
}

function setLightMode() {
  updateTheme(false);
}

const savedMode = localStorage.getItem("theme");
if (savedMode === "dark") {
  setDarkMode();
} else {
  setLightMode();
}

toggler_mode.addEventListener("change", () => {
  updateTheme(toggler_mode.checked);
});
