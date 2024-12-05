
const mainElement = document.querySelector("main");
const topBanner = document.getElementById("mp-topbanner");
const links = document.querySelectorAll("a");

links.forEach(link => {
  const href = link.href;

  // Create a new span element
  const span = document.createElement("span");

  // Style the span (optional, for visibility)
  span.style.display = "inline-block";
  span.style.marginLeft = "10px";
  span.style.color = "orchid";
  span.style.fontSize = "0.8em";

  // Set the text content of the span to the URL
  span.textContent = `(${href})`;

  // Append the span next to the link
  link.parentNode.insertBefore(span, link.nextSibling);
});

if (topBanner) {
  topBanner.style.backgroundColor = "orange";
} else {

}

if (mainElement) {
  mainElement.style.backgroundColor = "red";
} else {
}

