// Select the clickable element and the target element
const button_intro = document.getElementById("intro");
const response_intro = document.getElementById("main");

const button_schema = document.getElementById("schema");
const response_schema = document.getElementById("img01");

// Add a click event listener
button_intro.addEventListener("click", () => {
    response_schema.style.filter = "blur(5px)";
    response_schema.style.width = "40vw";
    response_schema.style.opacity = "0.5";

    response_intro.style.filter = "blur(0px)";
    response_intro.style.opacity = "1";

}
);


button_schema.addEventListener("click", () => {
    response_intro.style.filter = "blur(5px)";
    // response_intro.style.opacity = "0.2";

    response_schema.style.filter = "blur(0px)";
    response_schema.style.opacity = "1";
    response_schema.style.width = "100vw";

}
);

