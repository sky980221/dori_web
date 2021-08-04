const clock = document.querySelector("#clock");
const xmas = new Date('August 25, 2021 00:00:00');

function getClock(){
    const date = new Date();
    const realdate = xmas - date ; 
    const leftdays = String(Math.floor(realdate / (1000 * 60 * 60 * 24))).padStart(3,"0");
    const leftHours = String(23- date.getHours()).padStart(2,"0");
    const leftMinutes = String(59 - date.getMinutes()).padStart(2,"0");
    const leftSeconds = String(60 - date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${leftdays}d ${leftHours}h ${leftMinutes}m ${leftSeconds}s`);
}

getClock();
setInterval(getClock,1000);
