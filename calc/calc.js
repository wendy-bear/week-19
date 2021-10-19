class Calculator {
    static sum(a, b) {
        return a + b
    }
    static min(a, b) {
        return a - b
    }
    static mult(a, b) {
        return a * b
    }
    static div(a, b) {
        return a / b
    }
}



document.getElementById('calcSum').addEventListener("click", () => {

    let a = +document.getElementById("element1").value;
    let b = +document.getElementById("element2").value;
    let sumResult = Calculator.sum(a, b);

    document.getElementById("answer").value = sumResult;

});
document.getElementById('calcMin').addEventListener("click", () => {

    let a = +document.getElementById("element1").value;
    let b = +document.getElementById("element2").value;
    let minResult = Calculator.min(a, b);

    document.getElementById("answer").value = minResult;

});
document.getElementById('calcMult').addEventListener("click", () => {

    let a = +document.getElementById("element1").value;
    let b = +document.getElementById("element2").value;
    let multResult = Calculator.mult(a, b);

    document.getElementById("answer").value = multResult;

});
document.getElementById('calcDiv').addEventListener("click", () => {

    let a = +document.getElementById("element1").value;
    let b = +document.getElementById("element2").value;
    let divResult = Calculator.div(a, b);
    
    document.getElementById("answer").value = divResult;

});

