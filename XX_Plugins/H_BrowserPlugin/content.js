const navigationDiv = document.createElement("div");
navigationDiv.className = "navigation_left";
navigationDiv.id = "stickyDiv";
navigationDiv.textContent = "Plug yourself in.";

document.body.appendChild(navigationDiv);

const secondDiv = document.createElement("div");
secondDiv.className = "navigation_content";
secondDiv.textContent = "This is the second div.";

navigationDiv.appendChild(secondDiv);


document.addEventListener("scroll", () => {
    const stickyDiv = document.getElementById("stickyDiv");
  
    // Get the current scroll position
    const scrollTop = window.scrollY; // Distance from the top
  
    // Update the position of the sticky div
    stickyDiv.style.top = `${scrollTop}px`;
  });
  
