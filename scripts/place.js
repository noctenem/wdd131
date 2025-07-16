'use strict';

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

function calculateWindChill(temp_c, wind_km) {
    return (13.12 + 0.6215 * temp_c - 11.37 * Math.pow(wind_km, 0.16) + 0.3965 * temp_c * Math.pow(wind_km, 0.16)).toFixed(1)
}

const temp = parseFloat(document.getElementById('temp').textContent);
const wind = parseFloat(document.getElementById('wind').textContent);

if (temp <= 10 && wind > 4.8) {
    const chill = calculateWindChill(temp, wind)
    document.getElementById('windchill').textContent = `${chill} °C`;
} else {
    document.getElementById('windchill').textContent = 'N/A';
}