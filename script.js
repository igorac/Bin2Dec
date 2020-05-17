
const inputElement = document.querySelector('#number');
const spanDec      = document.querySelector('.result_dec');
const spanBin      = document.querySelector('.result_bin');

inputElement.addEventListener('keyup', (e) => {
    let value = e.target.value;
    let regExpBinary = /[A-Z-a-z]+|[2-9]+/;


    if (regExpBinary.test(value)) {
        alert('The number must be 0 or 1');
        inputElement.value = "";
        spanBin.innerHTML  = "";
        spanDec.innerHTML  = "";
        inputElement.focus();
        return false;
    }

    spanBin.innerHTML = inputElement.value;

    if (e.key === "0" || e.key === "1" || e.key === "Backspace") {
        spanDec.innerHTML = convertBinToDecT(value);
    }
});

function convertBinToDecT(number) {
    let digits = number.split("");
    digits = reverseArray(digits);
    
    let dec = digits.reduce((acc, next, index) => {
        return acc + Number(next) * Math.pow(2, index)
    }, 0)

    return dec;
}

function reverseArray(array) {
    
    let arrayReverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayReverse.push(array[i]);                
    }

    return arrayReverse;
}