(function () {
     "use strict";
     console.log("reading js");
     // your code starts here

const form = document.querySelector("form");
const storySection = document.querySelector(".story-preview");
const storyArticle = storySection.querySelector("article");
const storyText = document.getElementById("storytext");


// Store the IDs of all input fields
const inputIds = ["adjective", "adjective2 ", "verb", "place", "object", "name", "name2", "name3", "name4",];

form.addEventListener("submit", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Store the user's answers
    const answers = [];


    ;


    // Use a for loop to collect each answer
    for (let i = 0; i < inputIds.length; i++) {
        const input = document.querySelector("#" + inputIds[i]);
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

    // Give each answer a variable name
    const adjective = answers[0];
    const adjective2 = answers[1];
    const verb = answers[2];
    const place = answers[3];
    const name2 = answers[4];
    const object = answers[5];
    const name3 = answers[6];
    const name = answers[7];
    const name4 = answers[8];

    // Create the story paragraph
    const story = document.createElement("p");

    storyText.text( `The ${answers.adjective} Room. A place that only existed between ` +
            `${answers.place} and reality, mind and ${answers.adjective2}. ` +
            `Its color was very evident, as were the objects of its ` +
            `${answers.adjective} inhabitants. ${answers.name} was out that day. ` +
            `${answers.name2} sat in her usual seat, and across from her sat ` +
            `${answers.name3}. ${answers.name3} did not spend much time in the room, ` +
            `having devoted herself to ${answers.verb}. She had brought along ` +
            `${answers.name4}, who had gone without objection. He did not understand ` +
            `the value of ${answers.object}, but ${answers.name2} and ${answers.name3} ` +
            `apparently found some value in it.`);

    // Replace the sample story with the new story
    storyArticle.replaceWith(storyText);

    // Hide the original note
    storyNote.hidden = true;

 
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