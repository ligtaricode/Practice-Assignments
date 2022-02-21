



lineToWrite = prompt ("What must you write?");

numOfTimes = prompt("How many times must you write it?");

numOfTimes = parseInt(numOfTimes);



const linesComposer = function(numOfTimes,lineToWrite){
let str= ``;
for (let line = 1; line<numOfTimes; line++) {
    console.log(`${line} : ${lineToWrite}<br>`);
}

let refToTask4Div = document.querySelector("#task5");
refToTask4Div.innerHTML = str;
}

str= linesComposer(numOfTimes,lineToWrite);

