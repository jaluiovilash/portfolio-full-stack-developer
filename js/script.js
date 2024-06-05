console.log("Script is running");

// form submission code - display
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
});


// FAQs - hovering/toggling the answers
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
        console.log("else");
    }
}


// clicking the button - "github", to open my repos on github
document.getElementById("btn-github").addEventListener("click", function () {
    let link = document.createElement("a");
    link.href = "https://github.com/jaluiovilash?tab=repositories";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
});


