document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const serviceInput = document.getElementById("service");
    const confirmation = document.getElementById("confirmation");

    // Load last selected service from localStorage
    const lastQuote = JSON.parse(localStorage.getItem("lastServiceQuote"));
    if (lastQuote) {
        serviceInput.value = `${lastQuote.serviceName} (₦${Number(lastQuote.servicePrice).toLocaleString()})`;
    } else {
        serviceInput.value = "";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        // Save submission to localStorage
        const submissions = JSON.parse(localStorage.getItem("submissions") || "[]");
        submissions.push({ name, email, service: serviceInput.value, message, date: new Date().toISOString() });
        localStorage.setItem("submissions", JSON.stringify(submissions));

        // Hide form and show confirmation
        form.classList.add("hidden");
        confirmation.classList.remove("hidden");
    });
});
