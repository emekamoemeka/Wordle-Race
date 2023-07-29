const board = document.getElementById("board")

const tiles = Array.from(board.querySelectorAll("div"))

const target = "ARRRO"


const gameOverScreen = document.getElementById("gameOverScreen")

const background = document.getElementById("darken")


var boardIndex = 0
var colIndex = 0
var curGuess = ""

var curTiles = []

document.addEventListener('keydown', (event)=> {  
    if ((/[a-zA-Z]/).test(event.key) || event.key == 'Enter' || event.key == 'Backspace') {
        if (boardIndex < tiles.length) {
            if (event.key.length === 1 && colIndex < 5) {
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
            if (event.key == "Backspace") {
           
                if (boardIndex > 0 && colIndex >= 1 && curTiles.length > 0) {
                    tiles[boardIndex - 1].innerHTML = "";
                
                    boardIndex--
                    colIndex--
                    curTiles.pop()
                
                }
            }
        }
    }
});

function compareGuess(guess, arrayOfTiles) {
    var greenTracker = [false, false, false, false, false]
    var duplicateDetecter = target
    if (guess.toUpperCase() === target) {
        arrayOfTiles.forEach((element) => {
          element.style.backgroundColor = "#588c4c";
          element.style.border = "#588c4c solid";

        });
        gameOver()
    }
    else {
        arrayOfTiles.forEach((currentTile, i) => {
            if (currentTile.innerHTML == target[i]) {
                currentTile.style.backgroundColor = "#588c4c";
                currentTile.style.border = "#588c4c solid";
                const temp = duplicateDetecter.split('');
                temp[i] = '0';
                duplicateDetecter = temp.join('');
                greenTracker[i] = true
            }

        });

        arrayOfTiles.forEach((currentTile, i) => {
            if (duplicateDetecter.includes(currentTile.innerHTML) && greenTracker[i] == false) {
                currentTile.style.backgroundColor = "#b89c3c";
                duplicateDetecter = duplicateDetecter.replace(currentTile.innerHTML, "0", 1)
                console.log(duplicateDetecter)
                currentTile.style.border = "#b89c3c solid"
            }
        });
    }
}

function gameOver() {
    console.log("gameover")
    gameOverScreen.style.visibility = 'visible'
    background.style.visibility = 'visible'
    
}
