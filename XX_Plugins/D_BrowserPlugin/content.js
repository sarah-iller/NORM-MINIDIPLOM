document.addEventListener("DOMContentLoaded", () => {
  const margins = ["0vw", "10vw", "20vw", "30vw"];
  const elements = document.querySelectorAll("p");

  elements.forEach(element => {
    const randomMargin = margins[Math.floor(Math.random() * margins.length)];
    element.style.setProperty("--margin-left", randomMargin);
  });
});
