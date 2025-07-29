let bg = document.querySelector(".bg-dark");
let mobile = document.querySelector(".nav-mobile");
let body = document.querySelector("body");

function openMenu() {
  body.style.overflowY = "hidden";
  bg.classList.add("run");
  mobile.classList.add("run-mobile");
}

function closeBg() {
  body.style.overflowY = "auto";
  bg.classList.remove("run");
  mobile.classList.remove("run-mobile");
}
