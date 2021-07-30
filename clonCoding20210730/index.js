const colors = ["#904EAD", "#EEBC12", "#2E8CD5"];
const body = document.querySelector("body");
const h2 = document.querySelector("h2");

h2.style.color = "#EEF5FF";
body.style.background = "#904EAD";

function handleWindowResize() {
  const winwidth = window.innerWidth;

  if (winwidth < 600) {
    body.style.background = "#2E8CD5";
  } else if (winwidth >= 600 && winwidth < 900) {
    body.style.background = "#904EAD";
  } else {
    body.style.background = "#EEBC12";
  }
}
window.addEventListener("resize", handleWindowResize);
