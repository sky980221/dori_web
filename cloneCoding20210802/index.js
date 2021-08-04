const num = document.querySelector("#num");
const inputNum = document.querySelector("input");
const showChoice = document.querySelector("#showChoice");
const finalresult = document.querySelector("#finalresult");
const submitting = document.querySelector("#submitting");

function onCasino(event){
    event.preventDefault(); //submit하고 나서 새로고침 되는걸 막음
    const randomNum = num.value;
    const machineNum = Math.floor(math.random()*randomNum); //정수형태로 만들어줌 
    const usernum = inputNum.value;
    showChoice.innerText = 
    `You chose: ${usernum}, the machine chose: ${machineNum}.`;

if(userNum === machineNum){
    finalresult.innerText = "You won!";
}
else{
    finalresult.innerText = "You lost !";
}
}

submitting.addEventListener("submit",onCasino);




