let bg = document.querySelector(".bg-dark");
let mobile = document.querySelector(".nav-mobile");
let body = document.querySelector("body");

function openMenu() {
  bg.classList.add("run");
  mobile.classList.add("run-mobile");
}

function closeBg() {
  bg.classList.remove("run");
  mobile.classList.remove("run-mobile");
}

const counters = document.querySelectorAll(".counter");
let started = false;

function countUp(counter) {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const speed = target / 50;

  const updateCount = () => {
    if (count < target) {
      count += speed;
      counter.textContent = Math.ceil(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.textContent = target;
    }
  };

  updateCount();
}

function handleScroll() {
  const section = document.querySelector(".counter-section");
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (!started && sectionTop < windowHeight) {
    counters.forEach(countUp);
    started = true;
  }
}

window.addEventListener("scroll", handleScroll);
