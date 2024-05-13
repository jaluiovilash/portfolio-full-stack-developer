// form submission code - display

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
});


function toggleAnswer(id) {
    var answer = document.getElementById(id);
    var icon = document.getElementById("icon" + id.slice(-1));
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

// clicking the button - github, to open my repos

document.getElementById("btn-github").addEventListener("click", function () {
    var link = document.createElement("a");
    link.href = "https://github.com/jaluiovilash?tab=repositories";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
});
