// Create a footer element
const body = document.querySelector("body");
const newFooter = document.createElement("footer");
body.appendChild(newFooter);

// Get the current year
const today = new Date();
const thisYear = today.getFullYear();

// Select the footer
const footer = document.querySelector("footer");

// Create the copyright paragraph
const copyright = document.createElement("p");

// Add copyright text
copyright.innerHTML = `© ${thisYear} Denzil Phillips`;

// Add the paragraph to the footer
footer.appendChild(copyright);

// Create an array of technical skills
const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "GitHub",
    "Git",
    "UX Research",
    "Accessibility",
    "Data Analysis"
];

// Select the Skills section
const skillsSection = document.getElementById("Skills");

// Select the unordered list inside the Skills section
const skillsList = skillsSection.querySelector("ul");

// Loop through the skills array
for (let i = 0; i < skills.length; i++) {
    // Create a new list item
    const skill = document.createElement("li");

    // Add the skill name
    skill.innerText = skills[i];

    // Append the skill to the list
    skillsList.appendChild(skill);
}