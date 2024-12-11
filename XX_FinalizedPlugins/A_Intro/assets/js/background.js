let isEnabled = false; // Track toggle state

chrome.action.onClicked.addListener((tab) => {
  isEnabled = !isEnabled; // Toggle state
  const action = isEnabled ? "activate" : "deactivate";

  // Send a message to the content script
  chrome.tabs.sendMessage(tab.id, { action });

  // Update the toolbar icon
  chrome.action.setIcon({
    path: isEnabled
      ? chrome.runtime.getURL("assets/icons/icon-on.png")
      : chrome.runtime.getURL("assets/icons/icon-off.png"),
  });
  

  console.log(`Extension is now ${isEnabled ? "enabled" : "disabled"}`);
});
