




let tabLines = "";
function timeTables(factors) {
let primaryFactor = factors;
for (let secondaryFactor = 1; secondaryFactor <= 12; secondaryFactor++) {
    let product = primaryFactor*secondaryFactor;
    tabLines += `${primaryFactor} X ${secondaryFactor} = ${product}<br>`;
    
}
let task6Div = document.querySelector("#task6");
task6Div.innerHTML = tabLines;

}
function tablesGrouped(){
    for (let a = 1; a <= 12; a++) {
        timeTables(a);
    }
}
tablesGrouped();