let isActive = false; // Track whether red background is applied

// Function to apply red background to <p> elements
function applyRedBackground() {
  document.querySelectorAll("p").forEach((p) => {
    p.style.backgroundColor = "red";
  });
}

// Function to remove the red background
function removeRedBackground() {
  document.querySelectorAll("p").forEach((p) => {
    p.style.backgroundColor = ""; // Reset to default
  });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "activate") {
    if (!isActive) {
      applyRedBackground();
      isActive = true;
    }
  } else if (message.action === "deactivate") {
    if (isActive) {
      removeRedBackground();
      isActive = false;
    }
  }
});
