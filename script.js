let π = 3.14159265359; // pi definition

function appendOperation(operation) {
    document.getElementById('resultBox').innerHTML += operation;
}

function calculateResult(){
    let container = document.getElementById('resultBox');
    let resultBox = eval(container.innerHTML);
    container.innerHTML = resultBox;
}

function deleteLast(){
    let container = document.getElementById('resultBox');

    container.innerHTML = container.innerHTML.slice(0, 0);
}




var div = document.getElementById("resultBox");
var timerId;

function checkLength() {
  var textLength = div.innerText.length;

  if(textLength >= 16){
    div.style.fontSize = "20px";
  }
  else if (textLength >= 12) {
    div.style.fontSize = "30px";
  }
  else if(textLength >= 11){
    div.style.fontSize = "40px";
  }
  else if(textLength >= 8){
    div.style.fontSize = "50px";
  }
  else if (textLength >= 7) {
    div.style.fontSize = "60px";
  }
  else if(textLength >= 6){
    div.style.fontSize = "70px";
  } else {
    div.style.fontSize = "80px";
  }
}

timerId = setInterval(checkLength, 1000);
