window.onload = function() {
    const d = document;
    const w = window;

    d.getElementsByClassName('menu-icon')[0].addEventListener('click', (e) => {
        if (e.target.textContent == '☰') {
            e.target.textContent = '☓';
            d.getElementsByClassName('nav-links')[0].style.display = 'flex';
        } else {
            e.target.textContent = '☰';
            d.getElementsByClassName('nav-links')[0].style.display = 'none';
        }
    });
    
    
    w.addEventListener('resize', ()=>{
        if(w.innerWidth >= 768){
            d.getElementsByClassName('nav-links')[0].style.display = 'flex';
        } else {        
            d.getElementsByClassName('menu-icon')[0].textContent = '☰';
            d.getElementsByClassName('nav-links')[0].style.display = 'none';
        }
    })

    const userKey = 'user';
    
    if (w.location.pathname.includes('review')) {
        const form = d.getElementById('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                const name = d.getElementById('name').value;
                const email = d.getElementById('email').value;

                localStorage.removeItem(userKey); // Delete previous data

                const user = { name, email };
                localStorage.setItem(userKey, JSON.stringify(user));

                window.location.href = 'review.html';
            });
        }

        const userData = localStorage.getItem(userKey);

        if (userData) {
            const user = JSON.parse(userData);
            d.getElementById('username').textContent = user.name;
            d.getElementById('user-email').textContent = user.email;
        } else {
            alert('No user data found in localStorage');
        }
    }
    
    if (w.location.pathname.includes('catalog')) {
        const catalog = d.getElementsByClassName('content')[0];
        const data = [
            { title: 'Cactus', description: 'Cactus that add an elegant touch to your garden.', img: 'img/cactus.webp' },
            { title: 'Rose', description: 'Beautiful roses in various colors. Perfect for your garden.', img: 'img/rose.webp' },
            { title: 'Tulip', description: 'Bright tulips that will bring a pop of color to your garden.', img: 'img/tulip.webp' },
        ];

        data.forEach(item => {
            const section = d.createElement('section');
            section.classList.add('center', 'fadeIn');

            const img = d.createElement('img');
            img.setAttribute('loading', 'lazy');
            img.setAttribute('src', item.img);
            img.setAttribute('alt', item.title);
            img.setAttribute('width', '300');
            img.setAttribute('height', '300');

            const info = d.createElement('div');
            const title = d.createElement('h3');
            title.textContent = item.title;

            const text = d.createElement('p');
            text.textContent = item.description;

            const readMore = d.createElement('span');
            readMore.textContent = 'read more...';
            readMore.classList.add('read-more');

            info.appendChild(title);
            info.appendChild(text);
            info.appendChild(readMore);

            section.appendChild(img);
            section.appendChild(info);

            catalog.appendChild(section);
        });
    }
};
