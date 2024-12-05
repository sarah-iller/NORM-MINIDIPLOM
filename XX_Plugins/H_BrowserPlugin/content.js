const navigationDiv = document.createElement("div");
navigationDiv.className = "navigation_left";
navigationDiv.id = "stickyDiv";
navigationDiv.textContent = "Plug yourself in.";

// Append the div to the body
document.body.appendChild(navigationDiv);

document.addEventListener("scroll", () => {
    const stickyDiv = document.getElementById("stickyDiv");
  
    // Get the current scroll position
    const scrollTop = window.scrollY; // Distance from the top
  
    // Update the position of the sticky div
    stickyDiv.style.top = `${scrollTop}px`;
  });
  
