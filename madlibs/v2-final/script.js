(function () {
     "use strict";
     console.log("reading js");
     // your code starts here

const form = document.querySelector("form");
const storySection = document.querySelector(".story-preview");
const storyArticle = storySection.querySelector("article");
const storyText = document.getElementById("storytext");


// Store the IDs of all input fields
const inputIds = ["adjective", "adjective2", "verb", "place", "object", "name", "name2", "name3", "name4",];

form.addEventListener("submit", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Store the user's answers
    const answers = [];



    // Use a for loop to collect each answer
 for (const id of inputIds) {
            const input = document.getElementById(id);

            if (!input) {
                console.error(`Could not find an input with id="${id}".`);
                return;
            }

            const answer = input.value.trim();

        // Selection: check whether an answer is empty
        if (answer === "") {
            alert("Please fill in all the blanks!");
            input.focus();
            return;
        } else {
            answers.push(answer);
        }
    }

     const [adjective, adjective2, verb, place, object, name, name2, name3, name4] = answers;

    // Create the story paragraph
    const story = document.createElement("p");

    storyText.textContent = `The ${adjective} Room. A place that only existed between ` +
            `${place} and reality, mind and ${adjective2}. ` +
            `Its color was very evident, as were the objects of its ` +
            `${adjective} inhabitants. ${name} was out that day. ` +
            `${name2} sat in her usual seat, and across from her sat ` +
            `${name3}. ${name3} did not spend much time in the room, ` +
            `having devoted herself to ${verb}. She had brought along ` +
            `${name4}, who had gone without objection. He did not understand ` +
            `the value of ${object}, but ${name2} and ${name3} ` +
            `apparently found some value in it.`;

 
    // Scroll to the finished story
    storySection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

// Create a bold, highlighted word
function createWord(word) {
    const strong = document.createElement("strong");
    strong.textContent = word;
    return strong;
}
})();