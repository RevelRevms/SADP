// Transición de la intro
const welcome = document.getElementById('welcome');
const main = document.getElementById('main');
const introVideo = document.getElementById('intro-video');

function startTransition() {
  welcome.classList.add('fade-out');
  setTimeout(() => {
    main.classList.add('show');
    welcome.style.display = 'none';
  }, 1500);
}

setTimeout(() => {
  startTransition();
}, 4000);

// Menú Hamburguesa
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevenir scroll del body cuando el menú está abierto
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Observer para el footer
const footer = document.querySelector('footer');
if (footer) {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add('show');
      }
    });
  }, observerOptions);

  observer.observe(footer);
}

// Resaltar enlace activo en el menú
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === 'index.html' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  setActiveNavLink();
  
  // Smooth scroll para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// Precargar imágenes importantes
function preloadImages() {
  const images = [
    'images/sadp.png'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Ejecutar precarga
preloadImages();