/*
let element = document.getElementById("greeting")
element.textContent = "Hello DOM";
element.style.backgroundColor = "yellow";
element.style.color = "red";
*/
/*
function clicked() {
  alert("Hello World");
}
*/

let timer = document.getElementById("timer-div")
function omikuji() {
  let outcome = document.getElementById("outcome");
  let number = Math.random();
  if (number < 0.2) {
    outcome.textContent = "大吉";
    outcome.style.color = "red";
  }
  else if (number < 0.7) {
    outcome.textContent = "吉";
    outcome.style.color = "black";
  }
  else {
    outcome.textContent = "凶";
    outcome.style.color = "blue";
  }
}
/*
function timerfunc(){
  setInterval(timerCount, 1000);
}

function timerCount() {
  time = time + 1;
  timer.textContent
}
*/
/*
let greetButton = document.getElementById("greet-button");
greetButton.onclick = clicked;
*/

let omikujiButton = document.getElementById("omikuji-button");
omikujiButton.onclick = omikuji;
/*
let timerButton = document.getElementById("timer-button");
omikujiButton.onclick = timerfunc;
*/
/*
let age = 20;

if(age < 18){
  document.write("選挙権はありません");
}
else if(age < 25){
  document.write("投票に行けます")
}
else{
  document.write("衆議院議員に立候補できます");
}
*/