let rowCount = 16;


const gameSpace = document.getElementById("gameSpace");
//function for adding game rows and columns
function createGameArea(rows) {
    while (gameSpace.firstChild) {
        gameSpace.removeChild(gameSpace.firstChild);
    }
    if (rows>100){rows=100;}
    for (let i=0; i<rows; i++){
        const divRow = document.createElement('div');
        divRow.className="row"+i;
        divRow.style.setProperty('display','flex');
        divRow.style.setProperty('flex', 1);
        gameSpace.appendChild(divRow);
        for (let j=0; j<rows; j++){
            const divColumn = document.createElement('div');
            divColumn.className="column"+j;
            divColumn.style.setProperty('flex', 1);
            divColumn.addEventListener('mouseover',function(e){
                e.target.style.setProperty('background-color','black');
            });
            divRow.appendChild(divColumn);
        }
    }
}

createGameArea(rowCount);

//creates buttons for Shake and Set Size
const gameButtons = document.getElementById("gameButtons");
const shakeButton = document.createElement('button');
shakeButton.className = "shakeButton";
shakeButton.textContent = "SHAKE";
gameButtons.appendChild(shakeButton);
const setSizeButton = document.createElement('button');
setSizeButton.className = "setSizeButton";
setSizeButton.textContent = "Resize";
gameButtons.appendChild(setSizeButton);


//adds click listener to resize which recreates board based on input size
setSizeButton.addEventListener('click', () => {
    createGameArea(rowCount=parseInt(prompt("How many boxes tall and wide?","16")));
    }
);

//add click listener for shake here 
shakeButton.addEventListener('click', () => {
    createGameArea(rowCount);
    }
);
