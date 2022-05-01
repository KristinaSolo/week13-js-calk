const calc = document.querySelector(".calc");
const result = document.querySelector('#result');
let hasOperation = false;

function handleReset() {
    result.innerHTML = "";
    hasOperation = false;
}

function handleNumberClick(value) {
    result.innerHTML += value;
}

function handleOperationClick(value) {
    if (!hasOperation && !!result.innerHTML) {
        result.innerHTML += value;
        hasOperation = true;
    }
}

function calculate() {
    const hasMinus = result.innerHTML.indexOf('-') !== -1;
    const hasPlus = result.innerHTML.indexOf('+') !== -1;
    const hasDivide = result.innerHTML.indexOf('/') !== -1;
    const hasMultiply = result.innerHTML.indexOf('*') !== -1;

    if (hasMinus) {
        const array = result.innerHTML.split('-');
        result.innerHTML = +array[0] - +array[1];
    }

    if (hasPlus) {
        const array = result.innerHTML.split('+');
        result.innerHTML = +array[0] + +array[1];
    }

    if (hasDivide) {
        const array = result.innerHTML.split('/');
        result.innerHTML = +array[0] / +array[1];
    }

    if (hasMultiply) {
        const array = result.innerHTML.split('*');
        result.innerHTML = +array[0] * +array[1];
    }
}