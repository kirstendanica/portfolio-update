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
  greetingElement?.style.setProperty('opacity', '0');
  setTimeout(() => {
    if (greetingElement) {
      greetingElement.textContent = greetings[index];
      greetingElement.style.setProperty('opacity', '1');
      index = (index + 1) % greetings.length;
    }
  }, 500);
}

setInterval(changeGreeting, 4000);

function toggleNav() {
  document.querySelector("nav")?.classList.toggle("active");
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle?.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
  updateDarkModeIcon();
});

if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  updateDarkModeIcon();
}

function updateDarkModeIcon() {
  const icon = darkModeToggle?.querySelector('.icon');
  if (icon) {
    const color = body.classList.contains('dark-mode') 
      ? getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim()
      : getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim();
    icon.style.setProperty('stroke', color);
  }
}

updateDarkModeIcon();

const scrollToTopButton = document.getElementById('scroll-to-top');

if (scrollToTopButton) {
  window.addEventListener('scroll', () => {
    scrollToTopButton.style.setProperty('display', window.pageYOffset > 100 ? 'block' : 'none');
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}

const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', async (e) => {
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