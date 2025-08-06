const year = document.getElementById('year').textContent = new Date().getFullYear()


document.addEventListener("DOMContentLoaded", () => {
    const plantList = [
        { name: "Rose", description: "Beautiful roses in various colors." },
        { name: "Tulip", description: "Bright tulips that will bring a pop of color." },
        { name: "Cactus", description: "Cactus that add an elegant touch." }
    ];

    const plantContainer = document.getElementById("plant-list");

    plantList.forEach((plant) => {
        const plantElement = document.createElement("div");
        plantElement.innerHTML = `<h3>${plant.name}</h3><p>${plant.description}</p>`;
        plantContainer.appendChild(plantElement);
    });

    const addToFavorites = (plant) => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites.push(plant);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    addToFavorites("Rose");
});
