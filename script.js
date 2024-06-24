// Greeting rotation
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

// Toggle nav for mobile devices
function toggleNav() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

// Smooth scroll for internal links
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
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  bodyElement.classList.add('dark-mode');
}

function updateDarkModeIcon() {
  darkModeToggle.textContent = bodyElement.classList.contains('dark-mode') ? '☀️' : '🌙';
}

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
      throw new Error('Form submission fled');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error sending your message. Please try again later.');
  }
});
