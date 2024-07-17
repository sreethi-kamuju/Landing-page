document.addEventListener("DOMContentLoaded", () => {
    const learnMoreButton = document.querySelector(".learn-more");
    const contactUsButton = document.querySelector(".contact-us");

    learnMoreButton.addEventListener("click", () => {
        alert("More information will be added soon!");
    });

    contactUsButton.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Form submitted!");
        form.reset();
    });
});
