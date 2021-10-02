let element = document.getElementById("greeting")
element.textContent = "Hello DOM";
element.style.backgroundColor = "yellow";
element.style.color = "red";

function clicked() {
  alert("Hello World");
}

let greetButton = document.getElementById("greet-button");
greetButton.onclick = clicked;
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