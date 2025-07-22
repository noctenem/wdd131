'use strict';

const d = document;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Nairobi Kenya",
    location: "Mountain View, Nairobi, Kenya",
    dedicated: "2025, May, 18",
    area: 19870,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60485.jpg"
  },
  {
    templeName: "San José Costa Rica",
    location: "La Ribera, Heredia, Costa Rica",
    dedicated: "2000, June, 4",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-jose-costa-rica-temple/san-jose-costa-rica-temple-50533.jpg"
  },
  {
    templeName: "Toronto Ontario",
    location: "Brampton, Ontario  L6R 1A1, Canada",
    dedicated: "1990, August, 27",
    area: 55558,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/toronto-ontario-temple/toronto-ontario-temple-57466.jpg"
  },

];

const hamburgerBtn = d.getElementById('hamburger-btn');
const navList = d.getElementById('nav-list');
hamburgerBtn.innerText = '☰'

hamburgerBtn.addEventListener('click', () => { //arrow function
    navList.classList.toggle('visible');
    hamburgerBtn.textContent == '☰' ? hamburgerBtn.textContent = "X ": hamburgerBtn.textContent = "☰"
})

d.getElementById('year').textContent = new Date().getFullYear();
d.getElementById('last-modified').textContent += " " + document.lastModified;





function generateTempleCards(temples){

    const templeList = d.querySelector('.temple-gallery');
    templeList.innerHTML = ""; // clear the previous cards

    temples.forEach(temple => {
        const templeCard = d.createElement('figure')

        const templeImage = d.createElement('img')
        templeImage.setAttribute('src', temple.imageUrl)
        templeImage.setAttribute('alt', `${temple.templeName}`)
        templeImage.setAttribute('loading', 'lazy') // lazy loading

        const templeInfo = d.createElement('figcaption')

        const templeName = d.createElement('h3')
        templeName.textContent = temple.templeName;

        const templeLocation = d.createElement('p')
        templeLocation.textContent = `Location: ${temple.location}`

        const templeDedicated = d.createElement('p')
        templeDedicated.textContent = `Dedicated: ${temple.dedicated}`

        const templeArea = d.createElement('p')
        templeArea.textContent = `Area: ${temple.area} sqft`;

        templeInfo.appendChild(templeName)
        templeInfo.appendChild(templeLocation)
        templeInfo.appendChild(templeDedicated)
        templeInfo.appendChild(templeArea)

        templeCard.appendChild(templeInfo)
        templeCard.appendChild(templeImage)

        templeList.appendChild(templeCard)
    });
}

function filterTemples(criteria) {
    let filteredTemples

    switch (criteria) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000)
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000)
            break;
    
        default:
            filteredTemples = temples;
            break;
    }

    generateTempleCards(filteredTemples)
}


d.getElementById('home').addEventListener('click', () => generateTempleCards(temples))
d.getElementById('old').addEventListener('click', () => filterTemples('old'))
d.getElementById('new').addEventListener('click', () => filterTemples('new'))
d.getElementById('large').addEventListener('click', () => filterTemples('large'))
d.getElementById('small').addEventListener('click', () => filterTemples('small'))

generateTempleCards(temples);  