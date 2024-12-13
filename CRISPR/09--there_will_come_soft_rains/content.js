const snippets = [
    `from "There Will Come Soft Rains" by Ray Bradbury:`,
    `"[…] which poem would you like
    this evening?"`,
    `The house was silent.`,
    `The voice said at last, "Since you express no preference, I shall select a poem at random."
    Quiet music rose to back the voice. "Sara Teasdale. As I recall, your favourite...`,
    `There will come soft rains and the smell of the ground,`,
    `And swallows circling with their shimmering sound;`,
    ``,
    `And frogs in the pools singing at night`,
    `And wild plum trees in tremulous white;`,
    ``,
    `Robins will wear their feathery fire`,
    `Whistling their whims on a low fence-wire;`,
    ``,
    `And not one will know of the war, not one`,
    `Will care at last when it is done.`,
    ``,
    `Not one would mind, neither bird nor tree,`,
    `If mankind perished utterly;`,
    ``,
    `And Spring herself, when she woke at dawn`,
    `Would scarcely know that we were gone."`,
    ``,
    `The fire burned on the stone hearth and the cigar fell away into a mound of quiet ash on its tray. The
    empty chairs faced each other between the silent walls, and the music played.`,
    `At ten o'clock the house began to die.`
];



// Select all <p> elements on the page
const paragraphs = document.querySelectorAll("p");

// Loop through paragraphs and add a snippet after each
paragraphs.forEach((paragraph, index) => {
    if (index < snippets.length) {
        // Create a new inline-block element for the snippet
        const snippetElement = document.createElement("span");
        snippetElement.classList.add("shortsory_span");
        snippetElement.textContent = snippets[index];
        snippetElement.style.display = "inline-block";


        // Insert the snippet after the paragraph
        paragraph.parentNode.insertBefore(snippetElement, paragraph.nextSibling);
    }
});

