// Fetch the external HTML content and append it to the top of the page
fetch(chrome.runtime.getURL("content.html"))
  .then(response => response.text())
  .then(data => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = data;
    document.body.prepend(wrapper);
  })
  .catch(err => console.error("Failed to load content.html:", err));

// Get all <a> (link) elements on the page
const links = document.querySelectorAll("a");

// Modify the font size of each link
links.forEach(link => {
  link.classList.add("enlarged-link");
});
