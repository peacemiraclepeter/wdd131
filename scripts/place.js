
// Footer dynamic content
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#modified").textContent = document.lastModified;

// Wind Chill Calculation
const temp = 10;
const wind = 5;

function calculateWindChill(t, w) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(w, 0.16) +
        0.3965 * t * Math.pow(w, 0.16)
    ).toFixed(1);
}

let chill = "N/A";

if (temp <= 10 && wind > 4.8) {
    chill = calculateWindChill(temp, wind) + " °C";
}

document.getElementById("chill").textContent = chill;
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;
