// Select the clickable element and the target element
const button_intro = document.getElementById("intro");
const response_intro = document.getElementById("main");

const button_schema = document.getElementById("schema");
const response_schema = document.getElementById("img01");

// Add a click event listener
button_intro.addEventListener("click", () => {
    response_schema.style.filter = "blur(5px)";
    response_schema.style.width = "60vw";
    response_schema.style.opacity = "0.5";

    response_intro.style.filter = "blur(0px)";
    response_intro.style.opacity = "1";

}
);


button_schema.addEventListener("click", () => {
    response_intro.style.filter = "blur(5px)";
    response_intro.style.opacity = "0.5";

    response_schema.style.filter = "blur(0px)";
    response_schema.style.opacity = "1";
    response_schema.style.width = "100vw";

}
);


// Define a mapping of checkboxes to their respective CSS and JS files
const features = {
    "01--angle_baby": { css: "assets/css/angle_baby.css", js: "assets/script/angle_baby.js" },
    "02--dark_mode": { css: "assets/css/dark_mode.css", js: "assets/script/dark_mode.js" },
    "03--hard_disagree": { css: "assets/css/hard_disagree.css", js: "assets/script/hard_disagree.js" },
    "04--full_responsivity": { css: "assets/css/full_responsivity.css", js: "assets/script/full.js" },
    "05--oh_how_the_turn_tables": { css: "assets/css/turn_tables.css", js: "assets/script/turn_tables.js" },
    "06--hyper": { css: "assets/css/hyper.css", js: "assets/script/hyper.js" },
    "07--tornado": { css: "assets/css/tornado.css", js: "assets/script/tornado.js" },
    "08--on_acid": { css: "assets/css/on_acid.css", js: "assets/script/on_acid.js" },
    "09--there_will_come_soft_rains": { css: "assets/css/soft_rains.css", js: "assets/script/soft_rains.js" }
  };
  
  // Add an event listener to all checkboxes
  document.querySelectorAll(".switch input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const listItem = this.parentElement.nextSibling.textContent.trim();
  
      if (features[listItem]) {
        const { css, js } = features[listItem];
  
        if (this.checked) {
          // Load the CSS and JS when the checkbox is checked
          loadCSS(css);
          loadJS(js);
        } else {
          // Optionally, you can remove the CSS and JS when unchecked
          unloadCSS(css);
          unloadJS(js);
        }
      }
    });
  });
  
  // Helper function to load CSS dynamically
  function loadCSS(fileName) {
    if (!document.querySelector(`link[href="${fileName}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = fileName;
      document.head.appendChild(link);
    }
  }
  
  // Helper function to unload CSS dynamically
  function unloadCSS(fileName) {
    const link = document.querySelector(`link[href="${fileName}"]`);
    if (link) {
      link.remove();
    }
  }
  
  // Helper function to load JS dynamically
  function loadJS(fileName) {
    if (!document.querySelector(`script[src="${fileName}"]`)) {
      console.log(`link[href="${ fileName }"]`);

      const script = document.createElement("script");
      script.src = fileName;
      document.body.appendChild(script);
    }
  }
  
  // Helper function to unload JS dynamically
  function unloadJS(fileName) {
    const script = document.querySelector(`script[src="${fileName}"]`);
    if (script) {
      script.remove();
    }
  }
  
