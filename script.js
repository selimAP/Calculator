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

