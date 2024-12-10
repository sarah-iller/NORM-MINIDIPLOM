
const mainElement = document.querySelector("main");
const links = document.querySelectorAll("a");

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