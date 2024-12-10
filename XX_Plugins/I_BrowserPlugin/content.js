// document.addEventListener("DOMContentLoaded", () => {
//   // Function to create a random SVG visual
//   function createVisual() {
//     const svgNS = "http://www.w3.org/2000/svg";

//     // Create an SVG element
//     const svg = document.createElementNS(svgNS, "svg");
//     svg.setAttribute("width", "200");
//     svg.setAttribute("height", "200");
//     svg.setAttribute("viewBox", "0 0 200 200");
//     svg.classList.add("generated-visual");

//     // Generate random paths with dots
//     const path = document.createElementNS(svgNS, "path");
//     path.setAttribute(
//       "d",
//       `M${Math.random() * 100},${Math.random() * 100} 
//        C${Math.random() * 200},${Math.random() * 200} 
//        ${Math.random() * 200},${Math.random() * 200} 
//        ${Math.random() * 200},${Math.random() * 200}`
//     );
//     path.setAttribute("stroke", "black");
//     path.setAttribute("fill", "none");
//     path.setAttribute("stroke-width", "2");
//     svg.appendChild(path);

//     // Add random dots
//     for (let i = 0; i < 5; i++) {
//       const circle = document.createElementNS(svgNS, "circle");
//       circle.setAttribute("cx", Math.random() * 200);
//       circle.setAttribute("cy", Math.random() * 200);
//       circle.setAttribute("r", "5");
//       circle.setAttribute("fill", "black");
//       svg.appendChild(circle);
//     }

//     return svg;
//   }

//   // Function to place visuals randomly on the page
//   function placeVisual() {
//     const visual = createVisual();

//     // Random position within the viewport
//     const top = Math.random() * window.innerHeight;
//     const left = Math.random() * window.innerWidth;

//     visual.style.top = `${top}px`;
//     visual.style.left = `${left}px`;

//     // Append the visual to the body
//     document.body.appendChild(visual);
//   }

//   // Add multiple visuals to the page
//   for (let i = 0; i < 10; i++) {
//     placeVisual();
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  // Create an SVG namespace
  const svgNS = "http://www.w3.org/2000/svg";

  // Create an SVG element
  function createSVG() {
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "50");
    svg.setAttribute("height", "50");
    svg.setAttribute("viewBox", "0 0 50 50");
    svg.style.display = "inline-block";
    svg.style.marginLeft = "10px"; // Space from the text
    svg.style.zIndex = "1000"; // Ensure visibility

    // Create a red circle
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", "25");
    circle.setAttribute("cy", "25");
    circle.setAttribute("r", "20");
    circle.setAttribute("fill", "red");

    // Append the circle to the SVG
    svg.appendChild(circle);

    return svg;
  }

  // Select all <p> elements
  const paragraphs = document.querySelectorAll("p");

  // Append the SVG to each <p> element
  paragraphs.forEach(p => {
    const svg = createSVG();
    p.appendChild(svg); // Add SVG as a child of <p>
  });

  console.log(`${paragraphs.length} SVGs appended to <p> elements.`);
});
