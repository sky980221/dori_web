
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const superEventHandler = {};

const h2 = document.querySelector("h2");

function handleMouseEnter() {
  h2.style.color = "#1abc9c";
  h2.innerText = "The mouse is here!";
}

function handleMouseLeave() {
  h2.style.color = "#3498db";
  h2.innerText = "The mouse is gone!";
}

function handleWindowResize() {
  h2.style.color = "#9b59b6";
  h2.innerText = "You just resized!";
}

function rightClick() {
  h2.style.color = "#e74c3c";
  h2.innerText = "That was a rightclick!";
}

h2.addEventListener("mouseenter", handleMouseEnter);
h2.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", rightClick);
