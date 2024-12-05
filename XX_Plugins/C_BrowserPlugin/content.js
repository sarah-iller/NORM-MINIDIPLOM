
const mainElement = document.querySelector("main");
const topBanner = document.getElementById("mp-topbanner");
const links = document.querySelectorAll("a");
const nintendoLink = document.querySelector('a[href="/wiki/Nintendo"][title="Nintendo"]');

const contentToAdd = `
TL;DR - people are more easily manipulated than we like to admit, and the unprecedented volume of personal data being collected makes 
it possible for organizations and governments to manipulate us in ways that are difficult to predict or even detect. So it's less that 
we should worry about the data being collected, and more that we should worry about how it is being used and what we can do to make sure 
it isn't being misused.
`;

// Function to recursively search text nodes for "data"
function findAndInsertAfterData(node) {
  // Only process text nodes (nodeType === 3)
  if (node.nodeType === 3) {
    const regex = /\bdata\b/i; // Case-insensitive match for the word "data"

    if (regex.test(node.nodeValue)) {
      const parent = node.parentNode;

      // Find the index of "data"
      const matchIndex = node.nodeValue.toLowerCase().indexOf("data");

      // Split the text into parts: before, match, and after
      const beforeText = node.nodeValue.slice(0, matchIndex);
      const matchText = node.nodeValue.slice(matchIndex, matchIndex + 4); // "data" is 4 characters
      const afterText = node.nodeValue.slice(matchIndex + 4);

      // Create a new text node for the "before" part
      const beforeTextNode = document.createTextNode(beforeText);

      // Create a <span> for "data" and style it
      const highlightSpan = document.createElement("span");
      highlightSpan.textContent = matchText;
      highlightSpan.style.backgroundColor = "yellow";
      highlightSpan.style.padding = "5px";
      highlightSpan.style.borderRadius = "50%";
      highlightSpan.style.border = "1px solid #000000";



      // Create a new text node for the "after" part
      const afterTextNode = document.createTextNode(afterText);

      // Replace the original text node with the new nodes
      parent.replaceChild(afterTextNode, node); // Add "after" text
      parent.insertBefore(highlightSpan, afterTextNode); // Add styled "data"
      parent.insertBefore(beforeTextNode, highlightSpan); // Add "before" text

      // Update the original node to contain only "beforeText"
      // node.nodeValue = beforeText;

      // Create the new <div> element
      const infoSpan = document.createElement("span");
      infoSpan.textContent = contentToAdd;
      infoSpan.style.marginLeft = "5px";
      infoSpan.style.marginRight = "5px";
      infoSpan.style.backgroundColor = "#00ff00";
      // infoSpan.style.border = "1px solid #000000";

      // Insert the new text node and <div> after the current node
      parent.insertBefore(afterTextNode, node.nextSibling);
      parent.insertBefore(infoSpan, afterTextNode);
    }
  } else {
    // Recursively process child nodes
    node.childNodes.forEach(child => findAndInsertAfterData(child));
  }
}

// Start processing from the <body> element
findAndInsertAfterData(document.body);

// Check if the element exists
if (nintendoLink) {

  nintendoLink.style.fontSize = "31px";
  nintendoLink.style.color = "black";
  nintendoLink.style.backgroundColor = "yellow";
  nintendoLink.style.padding = "40px";


  // Create a new <div> element
  const newDiv = document.createElement("div");

  // Add the content to the <div>
  newDiv.textContent = `
    Lack of backup saves, the horrible implementation of voice chat, not being able to communicate with friends directly through messages on the Switch itself, no Switch rewards on My Nintendo, absence of apps on the system, among other things.
    `;

  // Add some styling (optional, for visibility)
  newDiv.style.marginTop = "10px";
  newDiv.style.padding = "40px";
  newDiv.style.backgroundColor = "yellow";
  newDiv.style.fontSize = "31px";
  newDiv.style.lineHeight = "28px";


  // Insert the <div> after the <a> element
  nintendoLink.parentNode.insertBefore(newDiv, nintendoLink.nextSibling);
} else {
}

// links.forEach(link => {
//   const href = link.href;

//   // Create a new span element
//   const span = document.createElement("span");

//   // Style the span (optional, for visibility)
//   span.style.display = "inline-block";
//   span.style.marginLeft = "10px";
//   span.style.color = "orchid";
//   span.style.fontSize = "0.8em";

//   // Set the text content of the span to the URL
//   span.textContent = `(${href})`;

//   // Append the span next to the link
//   link.parentNode.insertBefore(span, link.nextSibling);
// });

if (topBanner) {
  topBanner.style.backgroundColor = "orange";
} else {

}


