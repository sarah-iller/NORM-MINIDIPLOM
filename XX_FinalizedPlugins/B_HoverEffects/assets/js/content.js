let injectedCSS;
let injectedJS;
let injectedHTML;

// Inject CSS
function injectCSS() {
  if (!injectedCSS) {
    injectedCSS = document.createElement("link");
    injectedCSS.rel = "stylesheet";
    injectedCSS.href = chrome.runtime.getURL("assets/css/style.css");
    document.head.appendChild(injectedCSS);
    console.log("CSS injected");
  }
}

// Remove CSS
function removeCSS() {
  if (injectedCSS) {
    injectedCSS.remove();
    injectedCSS = null;
    console.log("CSS removed");
  }
}

// Inject JS
function injectJS() {
  if (!injectedJS) {
    injectedJS = document.createElement("script");
    injectedJS.src = chrome.runtime.getURL("assets/js/script.js");
    document.body.appendChild(injectedJS);
    console.log("JavaScript injected");
  }
}

// Remove JS
function removeJS() {
  if (injectedJS) {
    injectedJS.remove();
    injectedJS = null;
    console.log("JavaScript removed");
  }
}

// Inject HTML
function injectHTML() {
  if (!injectedHTML) {
    fetch(chrome.runtime.getURL("assets/html/snippet.html"))
      .then((response) => response.text())
      .then((html) => {
        injectedHTML = document.createElement("div");
        injectedHTML.innerHTML = html;
        document.body.appendChild(injectedHTML);
        console.log("HTML injected");
      });
  }
}

// Remove HTML
function removeHTML() {
  if (injectedHTML) {
    injectedHTML.remove();
    injectedHTML = null;
    console.log("HTML removed");
  }
}

// Listen for messages from background.js
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "activate") {
    injectCSS();
    injectJS();
    injectHTML();
  } else if (message.action === "deactivate") {
    removeCSS();
    removeJS();
    removeHTML();
  }
});
