let isEnabled = false; // Track the state of the toggle

chrome.action.onClicked.addListener((tab) => {
  isEnabled = !isEnabled; // Toggle the state
  const message = isEnabled ? "activate" : "deactivate";

  // Send a message to the content script
  chrome.tabs.sendMessage(tab.id, { action: message });

  // Update the extension icon to indicate the state
  chrome.action.setIcon({
    path: isEnabled ? "icon-on.png" : "icon-off.png"
  });

  console.log(`Extension is now ${isEnabled ? "enabled" : "disabled"}`);
});
