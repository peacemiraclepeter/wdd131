document.addEventListener("DOMContentLoaded", () => {
    const services = [
        { name: "Website Design", category: "Digital", price: 150000 },
        { name: "Shirt Branding", category: "Print", price: 8000 },
        { name: "Business Cards", category: "Print", price: 10000 },
        { name: "Logo Design", category: "Branding", price: 30000 },
        { name: "Brochures", category: "Print", price: 100000 },
        { name: "Social Media Branding", category: "Branding", price: 20000 },
        { name: "E-commerce Website", category: "Digital", price: 250000 },
        { name: "Web Application", category: "Digital", price: 300000 }
    ];

    const servicesGrid = document.getElementById("services-grid");
    const filterBtns = document.querySelectorAll("#service-filters .filter-btn");

    function displayServices(filteredServices) {
        servicesGrid.innerHTML = "";
        filteredServices.forEach(service => {
            const card = document.createElement("div");
            card.classList.add("service-card");
            card.innerHTML = `
                <h3>${service.name}</h3>
                <p>Category: ${service.category}</p>
                <p>Price: ₦${service.price.toLocaleString()}</p>
                <button class="quote-btn" data-service="${service.name}" data-price="${service.price}">Request Quote</button>
            `;
            servicesGrid.appendChild(card);
        });

        // Quote buttons click
        document.querySelectorAll(".quote-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const serviceName = btn.dataset.service;
                const servicePrice = btn.dataset.price;
                localStorage.setItem("lastServiceQuote", JSON.stringify({ serviceName, servicePrice }));
                alert(`You selected: ${serviceName} (₦${Number(servicePrice).toLocaleString()})\nGo to Contact page to complete your quote.`);
            });
        });
    }

    displayServices(services);

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const category = btn.dataset.category;
            displayServices(category === "All" ? services : services.filter(s => s.category === category));
        });
    });
});
