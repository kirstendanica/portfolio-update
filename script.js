// Greetings array in different languages
const greetings = [
  "Bonjour, bienvenue",
  "Hola, bienvenido",
  "Здравствуйте, добро пожаловать",
  "你好，欢迎",
  "Hej, välkomna",
  "Hei, tervetuloa",
  "Ciao, benvenuto",
  "مرحبا أهلا وسهلا",
];

const greetingElement = document.getElementById("greeting");
let index = 0;
function changeGreeting() {
  greetingElement.style.opacity = "0";

  setTimeout(() => {
    greetingElement.textContent = greetings[index];
    greetingElement.style.opacity = "1";

    index++;

    if (index === greetings.length) {
      index = 0;
    }
  }, 500);
}
// Change lang greeting after several seconds
setInterval(changeGreeting, 4000);

// Navigation for smaller screens
function toggleNav() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.hash).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Darkmode
const darkModeInput = document.getElementById("dark-mode-input");
const bodyElement = document.querySelector("body");

darkModeInput.addEventListener("change", () => {
  bodyElement.classList.toggle("dark-mode");
});
