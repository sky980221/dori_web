const clock = document.querySelector("h2#clock")



function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`)
}

getClock();
setInterval(getClock,1000);

//숫자 range는 0부터 60인데 10보다 작으면 앞에 0 붙이고 0보다 크면 상관없음. 

"1".padStart(2,"0") // 내 string, 요구 개수 , 채우는 string
