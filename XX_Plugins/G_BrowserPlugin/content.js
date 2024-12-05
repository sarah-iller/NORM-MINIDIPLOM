document.addEventListener("mousemove", (event) => {
    // Get the mouse position
    const mouseX = event.clientX; // Horizontal position of the mouse
    const mouseY = event.clientY; // Vertical position of the mouse

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate scaling factors based on mouse position
    const scaleX = 1 + (mouseX / viewportWidth) * 1.2; // Scale between 1 and 1.2
    const scaleY = 1 + (mouseY / viewportHeight) * 1.5; // Scale between 1 and 1.2

    // Select all elements you want to scale
    // const elements = document.querySelectorAll("h1, h2, h3, input"); // Adjust the selector if needed
    const elements = document.querySelectorAll("a"); // Adjust the selector if needed
    const elements_Y = document.querySelectorAll("li, ul, p"); // Adjust the selector if needed
    const elements_img = document.querySelectorAll("img"); // Adjust the selector if needed

    // Apply scaling to each element
    elements.forEach(element => {
        element.style.fontSize = `${scaleX}em`;
        element.style.fontSize = "fontSize 0.1s"; // Smooth scaling
    });

    elements_Y.forEach(element => {
        element.style.lineHeight = `${scaleY}em`;
        element.style.lineHeight = "lineHeight 0.1s"; // Smooth scaling
    });

    elements_img.forEach(element => {
        element.style.borderRadius = `${scaleX}em`;
        element.style.borderRadius = "borderRadius 0.1s"; // Smooth scaling
    });
});
