document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can add your code here to handle form submission, like sending an email or saving to a database.
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
});


function toggleAnswer(id) {
    var answer = document.getElementById(id);
    var icon = document.getElementById("icon" + id.slice(-1));
    if (answer.style.display === "none") {
        answer.style.display = "block";
        // icon.textContent = ""; // Change icon to minus sign
    } else {
        answer.style.display = "none";
        // icon.textContent = ""; // Change icon back to plus sign
    }
}