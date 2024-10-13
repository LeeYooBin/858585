const switchButton = document.querySelector("#switch-theme-button");

switchButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  const theme = document.body.classList.contains("light-theme")
    ? "light-theme"
    : "dark-theme";
  const music = theme === "light-theme" ? "normal-world.mpeg" : "inverted-world.mpeg";

  const audio = document.getElementById("music");
  audio.src = `src/assets/musics/${music}`;
  audio.play();
  audio.volume = 0.2;
});