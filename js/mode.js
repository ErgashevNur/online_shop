const toggleMode = document.getElementById("toggle-mode");
const theme = localStorage.getItem("theme");

if (theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme == "night") {
    toggleMode.checked = true;
  } else {
    toggleMode.checked = false;
  }
}
toggleMode.addEventListener("input", () => {
  if (toggleMode.checked) {
    document.documentElement.setAttribute("data-theme", "retro");
  } else {
    document.documentElement.setAttribute("data-theme", "night");
  }

  localStorage.setItem(
    "theme",
    document.documentElement.getAttribute("data-theme")
  );
});
