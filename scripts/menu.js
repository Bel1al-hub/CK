//гамбургер меню
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);


function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    menuToggle.classList.toggle('menu-toggle--active');
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    
    mainNav.classList.toggle('nav--active');
    navOverlay.classList.toggle('nav-overlay--active');
    
    if (mainNav.classList.contains('nav--active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

menuToggle.addEventListener('click', toggleMenu);

navOverlay.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('nav--active')) {
        toggleMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mainNav.classList.contains('nav--active')) {
        toggleMenu();
    }
});

//кнопка наверх
const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('scroll-to-top--visible');
    } else {
        scrollTopButton.classList.remove('scroll-to-top--visible');
    }
});


scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});