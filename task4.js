
let punishingProfessor = prompt("What is your professor's name?");

let lineToWrite = prompt ("What must you write?");

let numOfTimes = prompt("How many times must you write it?");

numOfTimes = parseInt(numOfTimes);

let str= ``;


for (let line = 1; line<numOfTimes; line++) {
    console.log(`${line} : ${lineToWrite}<br>`);
}

let refToTask4Div = document.querySelector("#task4");
refToTask4Div.innerHTML = str;

