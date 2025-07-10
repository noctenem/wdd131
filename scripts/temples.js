'use strict';

const d = document;

const hamburgerBtn = d.getElementById('hamburger-btn');
const navList = d.getElementById('nav-list');
hamburgerBtn.innerText = '☰'

hamburgerBtn.addEventListener('click', () => { //arrow function
    navList.classList.toggle('visible');
    hamburgerBtn.textContent == '☰' ? hamburgerBtn.textContent = "X ": hamburgerBtn.textContent = "☰"
})

d.getElementById('year').textContent = new Date().getFullYear();
d.getElementById('last-modified').textContent += " " + document.lastModified;
