document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { title: "Church Branding", category: "Branding", image: "https://i.pinimg.com/1200x/e6/f5/e7/e6f5e77a7ae12f5674b973b82ba939db.jpg" },
        { title: "Corporate Website", category: "Digital", image: "https://i.pinimg.com/1200x/9c/3d/ee/9c3deece69a8ad2ea3772e5371671645.jpg" },
        { title: "Event Flyer", category: "Print", image: "https://i.pinimg.com/736x/b1/80/8d/b1808d0a1ab50fe46a9a4269b8066f5e.jpg" },
        { title: "Logo Package", category: "Branding", image: "https://i.pinimg.com/736x/ee/38/2f/ee382fad6c3dcb3265ab87e45f2f38a2.jpg" },
        { title: "Brochure Design", category: "Print", image: "https://i.pinimg.com/1200x/8b/5f/e7/8b5fe729d5737e9a6e49032a4df73517.jpg" },
        { title: "E-commerce Site", category: "Digital", image: "https://i.pinimg.com/736x/2c/fd/ad/2cfdad1fa57dad667a9072d671001a15.jpg" }
    ];

    const portfolioGrid = document.getElementById("portfolio-grid");
    const filterBtns = document.querySelectorAll("#portfolio-filters .filter-btn");

    function displayProjects(filteredProjects) {
        portfolioGrid.innerHTML = "";
        filteredProjects.forEach(project => {
            const card = document.createElement("div");
            card.classList.add("portfolio-card");
            card.innerHTML = `
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="portfolio-overlay">
                    <h3>${project.title}</h3>
                    <p>Category: ${project.category}</p>
                </div>
            `;
            portfolioGrid.appendChild(card);
        });
    }

    // Initial display
    displayProjects(projects);

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.dataset.category;
            displayProjects(category === "All" ? projects : projects.filter(p => p.category === category));
        });
    });
});
