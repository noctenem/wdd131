'use strict';

const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

function populateProductDropdown() {
  const selectElement = document.getElementById("product-name");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
}

function updateReviewCount() {
  let reviewCount = localStorage.getItem('reviewCount') || 0;
  reviewCount++;
  localStorage.setItem('reviewCount', reviewCount);

  const reviewCounterElement = document.getElementById("review-counter");
  if (reviewCounterElement) {
    reviewCounterElement.textContent = `Total Reviews Submitted: ${reviewCount}`;
  }
}

if (window.location.href.includes("review.html")) {
  updateReviewCount();
}

document.addEventListener("DOMContentLoaded", function() {
  populateProductDropdown();
});
