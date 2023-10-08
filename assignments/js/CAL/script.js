function appendToResult(value) {
    if (value=="=") {
        calculate();
    }else{
        document.getElementById('result').textContent += value;
    }
}

function clearResult() {
    document.getElementById('result').textContent = '';
}

function calculate() {
    var expression = document.getElementById("result").textContent;
    var result = eval(expression);
    document.getElementById('result').textContent = result;
}

