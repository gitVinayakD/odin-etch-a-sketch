let rowCount = 16;


const gameSpace = document.getElementById("gameSpace");
function createGameArea(rows) {
    if (gameSpace.childElementCount==0){
        for (let i=0; i<rows; i++){
            const divRow = document.createElement('div');
            divRow.className="row"+i;
            divRow.style.setProperty('display','flex');
            divRow.style.setProperty('flex', 1);
            gameSpace.appendChild(divRow);
            for (let j=0; j<rows; j++){
                const divColumn = document.createElement('div');
                divColumn.className="column"+j;
                divColumn.style.setProperty('border-style','solid');
                divColumn.style.setProperty('flex', 1);
                divRow.appendChild(divColumn);
            }
        }
    }
}

createGameArea(rowCount);
console.log(gameSpace);