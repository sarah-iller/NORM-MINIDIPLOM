document.addEventListener("DOMContentLoaded", () => {
  const mainElements = document.querySelectorAll("p");
  console.log(`Found ${mainElements.length} <p> elements.`);
  mainElements.forEach(main => {
    main.style.backgroundColor = "red"; // Apply your style
  });
});