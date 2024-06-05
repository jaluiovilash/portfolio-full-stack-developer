// form submission code - display
// document.getElementById("contactForm").addEventListener("submit", function (event) {
//     event.preventDefault();
//     alert("Form submitted successfully!");
//     document.getElementById("contactForm").reset();
// });

// function toggleAnswer(id) {
//     var answer = document.getElementById(id);
//     var icon = document.getElementById("icon" + id.slice(-1));
//     if (answer.style.display === "none") {
//         answer.style.display = "block";
//     } else {
//         answer.style.display = "none";
//     }
// }


// clicking the button - "github", to open my repos on github
document.getElementById("btn-github").addEventListener("click", function () {
    let link = document.createElement("a");
    link.href = "https://github.com/jaluiovilash?tab=repositories";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
});



// new code
document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Form submitted successfully!");
            document.getElementById("contactForm").reset();
        } else {
            alert("Failed to submit form.");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form.");
    }
});