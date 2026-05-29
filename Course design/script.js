// ===== Typing Effect =====
const typingElement = document.querySelector(".typing");

const words = [
  "Web Developer",
  "Game Developer",
  "Frontend Engineer",
  "Creative Coder",
  "Writer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

  const currentWord = words[wordIndex];

  if(!deleting){
    typingElement.textContent =
      currentWord.substring(0, charIndex++);
  }
  else{
    typingElement.textContent =
      currentWord.substring(0, charIndex--);
  }

  let speed = deleting ? 60 : 120;

  if(charIndex === currentWord.length + 1){
    deleting = true;
    speed = 1000;
  }

  if(charIndex === 0){
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// ===== Scroll Reveal =====
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el)=>observer.observe(el));

// ===== Skill Animation =====
const skillBars = document.querySelectorAll(".skill-progress");

function animateSkills(){
  skillBars.forEach((bar)=>{
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
}

window.addEventListener("scroll", animateSkills);