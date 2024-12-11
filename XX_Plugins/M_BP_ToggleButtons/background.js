let isEnabled = false; // Track the toggle state

chrome.action.onClicked.addListener((tab) => {
  // Toggle the state
  isEnabled = !isEnabled;

  // Send the toggle message to the active tab
  const action = isEnabled ? "activate" : "deactivate";
  chrome.tabs.sendMessage(tab.id, { action });

  // Update the toolbar icon to indicate the state
  chrome.action.setIcon({
    path: isEnabled ? "icons/icon-on.png" : "icons/icon-off.png",
  });

  console.log(`Red background is now ${isEnabled ? "ON" : "OFF"}`);
});
