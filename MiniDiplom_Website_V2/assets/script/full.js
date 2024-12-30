document.addEventListener("mousemove", (event) => {
    // Get the mouse position
    const mouseX = event.clientX; // Horizontal position of the mouse
    const mouseY = event.clientY; // Vertical position of the mouse

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate scaling factors based on mouse position
    const scaleX = 0.5 + (mouseX / viewportWidth) * 1.2; // Scale between 1 and 1.2
    const scaleY = 0.5 + (mouseY / viewportHeight) * 1.8; // Scale between 1 and 1.2

    // Select all elements you want to scale
    const elements = document.querySelectorAll("li, ul, div, table, h1, h2, h3, h4, h5, figcaption, label"); // Adjust the selector if needed
    const elements_Y = document.querySelectorAll("li, ul, div, table, h1, h2, h3, h4, h5, figcaption, label"); // Adjust the selector if needed

    // Apply scaling to each element
    elements.forEach(element => {
        element.style.fontSize = `${scaleX}em`;
        element.style.fontSize = "fontSize 0.1s"; // Smooth scaling
    });

    elements_Y.forEach(element => {
        element.style.lineHeight = `${scaleY}em`;
        element.style.lineHeight = "lineHeight 0.1s"; // Smooth scaling
    });

});
