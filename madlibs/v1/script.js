const form = document.querySelector("form");
const storySection = document.querySelector(".story-preview");
const storyArticle = storySection.querySelector("article");
const storyNote = storySection.querySelector(".story-note");

form.addEventListener("submit", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get the user's answers
    const adjective = document.querySelector("#adjective").value.trim();
    const animal = document.querySelector("#animal").value.trim();
    const verb = document.querySelector("#verb").value.trim();
    const place = document.querySelector("#place").value.trim();
    const food = document.querySelector("#food").value.trim();
    const exclamation = document.querySelector("#exclamation").value.trim();

    // Build the story
    const story = document.createElement("p");

    story.append(
        "One day, a ",
        createWord(adjective),
        " ",
        createWord(animal),
        " went ",
        createWord(verb),
        " to ",
        createWord(place),
        ". Along the way, it ate a giant plate of ",
        createWord(food),
        " and shouted, ",
        createWord('"' + exclamation + '"'),
        " What a wonderfully weird adventure!"
    );

    // Replace the example story with the new story
    storyArticle.replaceChildren(story);

    // Hide the note after the story is created
    storyNote.hidden = true;

    // Bring the finished story into view
    storySection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

// Create a highlighted word safely
function createWord(word) {
    const strong = document.createElement("strong");
    strong.textContent = word;
    return strong;
}