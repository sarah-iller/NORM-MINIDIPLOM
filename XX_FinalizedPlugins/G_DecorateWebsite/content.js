    console.log("Content script loaded and running!");
  
    const svgFolder = "svg/";
    const svgFiles = ["knot_01.svg", "knot_02.svg", "knot_03.svg"]; // Add your SVG filenames here
  
    // Helper to get a random SVG
    function getRandomSVG() {
      const randomIndex = Math.floor(Math.random() * svgFiles.length); // Define randomIndex here
      const svgPath = chrome.runtime.getURL(`${svgFolder}${svgFiles[randomIndex]}`);
      console.log(`Selected SVG Path: ${svgPath}`);
      const img = document.createElement("img");
      img.src = svgPath;
      img.className = "svg-inserter";
      return img;
    }
  
    // Function to wrap "and" with a span and insert the SVG
    function processTextNodes(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        console.log(`Processing text node: ${node.nodeValue}`);
        const regex = /\b(and)\b/gi; // Match "and" case-insensitively
        const text = node.nodeValue;
  
        if (regex.test(text)) {
          console.log(`Found "and" in text: ${text}`);
          const fragment = document.createDocumentFragment();
          const parts = text.split(regex);
  
          parts.forEach((part, index) => {
            if (index % 2 === 1) {
              // Insert SVG before the matched "and"
              const svg = getRandomSVG();
              fragment.appendChild(svg);
  
              // Wrap "and" with a span
              const span = document.createElement("span");
              span.className = "highlight-and";
              span.textContent = part;
              fragment.appendChild(span);
            } else {
              fragment.appendChild(document.createTextNode(part));
            }
          });
  
          node.replaceWith(fragment);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        console.log(`Processing element node: ${node.tagName}`);
        // Recurse through child nodes
        node.childNodes.forEach(processTextNodes);
      }
    }
  
    // Start processing from the body element
    console.log("Starting to process the document body...");
    processTextNodes(document.body);

  