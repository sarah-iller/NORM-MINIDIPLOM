document.addEventListener("mousemove", (event) => {
    // Get the mouse position
    const mouseX = event.clientX; // Horizontal position of the mouse
    const mouseY = event.clientY; // Vertical position of the mouse
  
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
  
    // Calculate scaling factors based on mouse position
    const scaleX = 1 + (mouseX / viewportWidth) * 0.8; // Scale between 1 and 1.2
    const scaleY = 1 + (mouseY / viewportHeight) * 0.8; // Scale between 1 and 1.2
  
    // Select all elements you want to scale
    const elements = document.querySelectorAll("img"); // Adjust the selector if needed
  
    // Apply scaling to each element
    elements.forEach(element => {
      element.style.transform = `scale(${scaleX}, ${scaleY})`;
      element.style.transition = "transform 0.1s"; // Smooth scaling
    });
  });
  