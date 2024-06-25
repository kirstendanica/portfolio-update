const greetings = [
  "Bonjour, bienvenue",
  "Hola, bienvenido",
  "Здравствуйте, добро пожаловать",
  "你好，欢迎",
  "Hej, välkomna",
  "Hei, tervetuloa",
  "Ciao, benvenuto",
  "مرحبا أهلا وسهلا"
];

const greetingElement = document.getElementById("greeting");
let index = 0;

function changeGreeting() {
  greetingElement.style.opacity = "0";
  setTimeout(() => {
    greetingElement.textContent = greetings[index];
    greetingElement.style.opacity = "1";
    index = (index + 1) % greetings.length;
  }, 500);
}

setInterval(changeGreeting, 4000);

function toggleNav() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
  updateDarkModeIcon();
});

// Check user's dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  updateDarkModeIcon();
}

function updateDarkModeIcon() {
  const icon = darkModeToggle.querySelector('.icon');
  if (body.classList.contains('dark-mode')) {
    icon.style.stroke = getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim();
  } else {
    icon.style.stroke = getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim();
  }
}

// Call to set the correct color of svg toggler
updateDarkModeIcon();

// Scroll to top functionality
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      alert('Message sent successfully!');
      contactForm.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error sending your message. Please try again later.');
  }
});