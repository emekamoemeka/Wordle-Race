
// Initialize several UI elements

const tiles = Array.from(document.getElementById("board").querySelectorAll("div"))
const gameOverScreen = document.getElementById("gameOverScreen")
const background = document.getElementById("darken")

const keyboard = {
    "A": [document.getElementById("A"), false],
    "B": [document.getElementById("B"), false],
    "C": [document.getElementById("C"), false],
    "D": [document.getElementById("D"), false],
    "E": [document.getElementById("E"), false],
    "F": [document.getElementById("F"), false],
    "G": [document.getElementById("G"), false],
    "H": [document.getElementById("H"), false],
    "I": [document.getElementById("I"), false],
    "J": [document.getElementById("J"), false],
    "K": [document.getElementById("K"), false],
    "L": [document.getElementById("L"), false],
    "M": [document.getElementById("M"), false],
    "N": [document.getElementById("N"), false],
    "O": [document.getElementById("O"), false],
    "P": [document.getElementById("P"), false],
    "Q": [document.getElementById("Q"), false],
    "R": [document.getElementById("R"), false],
    "S": [document.getElementById("S"), false],
    "T": [document.getElementById("T"), false],
    "U": [document.getElementById("U"), false],
    "V": [document.getElementById("V"), false],
    "W": [document.getElementById("W"), false],
    "x": [document.getElementById("X"), false],
    "Y": [document.getElementById("Y"), false],
    "Z": [document.getElementById("Z"), false],



}

//Initialize global variables
const target = "ARRRO"
let boardIndex = 0
let colIndex = 0
let curGuess = ""
let curTiles = []
let gameOver = false

//When a key is pressed...
//_________________________________________________________________________________________//
document.addEventListener('keydown', (event)=> {  
    if (((/[a-zA-Z]/).test(event.key) || event.key == 'Enter' || event.key == 'Backspace') && gameOver == false) {
        
        if (boardIndex < tiles.length) {
            if (event.key == "Backspace") {
                unblink(tiles[boardIndex - 1])
                if (boardIndex > 0 && colIndex >= 1 && curTiles.length > 0) {
                    tiles[boardIndex - 1].innerHTML = "";
                
                    boardIndex--
                    colIndex--
                    curTiles.pop()
                
                }
            }

            if (event.key.length === 1 && colIndex < 5) {
                blink(tiles[boardIndex])
                tiles[boardIndex].innerHTML = event.key.toUpperCase()
                curTiles.push(tiles[boardIndex])
                boardIndex++
                colIndex++
                curGuess = curGuess + event.key
            
            }
            if (event.key == "Enter" && colIndex == 5) {
                colIndex = 0
                compareGuess(curGuess, curTiles)
                
                curGuess = ""
                curTiles = []
            }
            
        }
    }
});

// Function grades the users guessed word.
//_______________________________________________________________________________________//
function compareGuess(guess, arrayOfTiles) {
    let greenTracker = [false, false, false, false, false];
    let duplicateDetecter = target;
    if (guess.toUpperCase() === target) {
        arrayOfTiles.forEach((element) => {
          element.style.backgroundColor = "#588c4c";
          element.style.border = "2px #588c4c solid";

        });
        endGame();
    }
    else {
        arrayOfTiles.forEach((currentTile, i) => {
            if (currentTile.innerHTML == target[i]) {
                //color the tile
                currentTile.style.backgroundColor = "#588c4c";
                currentTile.style.border = "2px #588c4c solid";
                //update grade tracking 
                const temp = duplicateDetecter.split('');
                temp[i] = '0';
                duplicateDetecter = temp.join('');
                greenTracker[i] = true;
                //color the corresponding button
                keyboard[currentTile.innerHTML][0].style.backgroundColor = "#588c4c";
                keyboard[currentTile.innerHTML][1] = true
            }

        });

        arrayOfTiles.forEach((currentTile, i) => {
            if (duplicateDetecter.includes(currentTile.innerHTML) && greenTracker[i] == false) {
                //color the tile
                currentTile.style.backgroundColor = "#b89c3c";
                currentTile.style.border = "2px #b89c3c solid";
                //upgrade grade tracking
                duplicateDetecter = duplicateDetecter.replace(currentTile.innerHTML, "0", 1);
                console.log(duplicateDetecter);
                //color the corresponding button
                if (keyboard[currentTile.innerHTML][1] == false){
                    keyboard[currentTile.innerHTML][0].style.backgroundColor = "#b89c3c";
                }

            }

            else if (greenTracker[i] == false){
                //color the tile
                currentTile.style.backgroundColor = "#414242";
                currentTile.style.border = "2px #414242 solid";
                    if (keyboard[currentTile.innerHTML][1] == false){
                        keyboard[currentTile.innerHTML][0].style.backgroundColor = "#414242";
                }
            }
            
                

            
        });
    }
}
// Activates game over screen.
//_________________________________________________________________________________________________//
function endGame() {
    gameOver = true
    console.log("gameOver")
    gameOverScreen.style.visibility = 'visible'
    background.style.visibility = 'visible'
    
}
function blink(currentTile){
    currentTile.style.border = "2px #828484 solid"
}
function unblink(currentTile) {
    currentTile.style.border = "2px #414242 solid"
}