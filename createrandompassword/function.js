const len = document.getElementById("len");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generatePassword = document.getElementById("generate");
const result = document.getElementById("password");

const upperEl = 'ABCDEFGHIJKLMNOPRSTUVYZXW';
const lowerEl = 'abcdefghijklmnoprstuvyzxw';
const numberEl = '0123456789';
const symbolEl = '@!+%&/()=-_';

function getUpperCase (){
    return upperEl[Math.floor(Math.random()*
        upperEl.length)];
}
function getLowerCase (){
    return lowerEl[Math.floor(Math.random()*
        lowerEl.length)];
}
function getNumberCase (){
    return numberEl[Math.floor(Math.random()*
        numberEl.length)];
}
function getSymbolCase (){
    return symbolEl[Math.floor(Math.random()*
        symbolEl.length)];
}

function generatePass(){
    const lenLength = len.value;

    let password = "";

    for(let x = 0; x < lenLength;x++){

        const y = generateFunc();
        password += y;
    }
    result.innerHTML = password
}

function generateFunc(){
    const ys = [];
    if(upper.checked){
        ys.push(getUpperCase())
    }
    if(lower.checked){
        ys.push(getLowerCase())
    }
    if(number.checked){
        ys.push(getNumberCase())
    }
    if(symbol.checked){
        ys.push(getSymbolCase())
    }
    return ys[Math.floor(Math.random()*ys.length)]
}

generatePassword.addEventListener("click",generatePass)
