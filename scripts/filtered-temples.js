const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const gallery = document.querySelector("#temples");
const heading = document.querySelector("main h2");

/* Mobile Menu */
menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.classList.toggle("open");
});

/* Footer Info */
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

/* Temple Data */
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "https://www.bing.com/th/id/OIP.OnVWTjLOlJMu-4HFG61qVQHaFj?w=211&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://www.bing.com/th/id/OIP.4TzZHXvbpd51hhmtr1-WJQHaFo?w=233&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
];

/* Display Function */
function displayTemples(list) {
    gallery.innerHTML = "";

    list.forEach(temple => {
        const figure = document.createElement("figure");

        const title = document.createElement("h3");
        title.textContent = temple.templeName;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";
        img.width = 400;
        img.height = 250;

        const caption = document.createElement("figcaption");
        caption.innerHTML = `
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} ft²</p>
        `;

        figure.append(title, caption, img);
        gallery.appendChild(figure);
    });
}

/* Filter Function */
function filterTemples(type) {
    let filtered = temples;

    switch (type) {
        case "old":
            filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
            heading.textContent = "Old Temples";
            break;
        case "new":
            filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
            heading.textContent = "New Temples";
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            heading.textContent = "Large Temples";
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            heading.textContent = "Small Temples";
            break;
        default:
            heading.textContent = "Home";
    }

    displayTemples(filtered);
}

/* Navigation Events */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        filterTemples(link.dataset.filter);
    });
});

/* Initial Load */
displayTemples(temples);
